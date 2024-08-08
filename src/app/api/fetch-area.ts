import { ApiError } from 'next/dist/server/api-utils';

import { API } from './apiClient';
import { SeoulGuAddressType, PageDto, SeoulGuType, AddressDto } from './type';

const SeoulAreas = {
  Gangnam: process.env.NEXT_PUBLIC_GANGNAM,
  Gangseo: process.env.NEXT_PUBLIC_GANGSEO,
  Gwanak: process.env.NEXT_PUBLIC_GWANAK,
  Geumcheon: process.env.NEXT_PUBLIC_GEUMCHEON,
  Dongdaemun: process.env.NEXT_PUBLIC_DONGDAEMUN,
  Seodaemun: process.env.NEXT_PUBLIC_SEODAEMUN,
  Seocho: process.env.NEXT_PUBLIC_SEOCHO,
  Seongbuk: process.env.NEXT_PUBLIC_SEONGBUK,
  Songpa: process.env.NEXT_PUBLIC_SONGPA,
  Yangcheon: process.env.NEXT_PUBLIC_YANGCHEON,
  Yeongdeungpo: process.env.NEXT_PUBLIC_YEONDEUNGPO,
  Jongno: process.env.NEXT_PUBLIC_JONGNO,
  Jungnang: process.env.NEXT_PUBLIC_JUNGNANG,

  /** 위도경도 추가 필요 */
  Gwangjin: process.env.NEXT_PUBLIC_GWANGJIN,
  Guro: process.env.NEXT_PUBLIC_GURO,
  Seongdong: process.env.NEXT_PUBLIC_SEONGDONG,

  /** 파일데이터 수정 필요 */
  Mapo: process.env.NEXT_PUBLIC_MAPO,
  Eunpyeong: process.env.NEXT_PUBLIC_EUNPYEONG,
  /** 서비스 미제공 */
  Gangdong: process.env.NEXT_PUBLIC_GANGDONG,
  Gangbuk: process.env.NEXT_PUBLIC_GANGBUK,
  Nowon: process.env.NEXT_PUBLIC_NOWON,
  Dobong: process.env.NEXT_PUBLIC_DOBONG,
  Yongsan: process.env.NEXT_PUBLIC_YONGSAN,
  Jung: process.env.NEXT_PUBLIC_JUNG,
  Dongjak: process.env.NEXT_PUBLIC_DONGJAK,
};

export const fetchArea = async (area: SeoulGuType, perPage: number) => {
  const apiKey = process.env.NEXT_PUBLIC_GO_DATA_DECODING_KEY;

  if (!apiKey) {
    throw new ApiError(403, 'API 키가 설정되지 않았습니다. 환경 변수를 확인하세요.');
  }

  if (area === 'Gwangjin' || area === 'Guro' || area === 'Seongdong' || area === 'Mapo' || area === 'Eunpyeong') {
    throw new ApiError(404, '해당지역은 서비스 준비중입니다🐥');
  }

  if (
    area === 'Gangdong' ||
    area === 'Gangbuk' ||
    area === 'Nowon' ||
    area === 'Dobong' ||
    area === 'Yongsan' ||
    area === 'Jung' ||
    area === 'Dongjak'
  ) {
    throw new ApiError(404, '해당지역은 관련정보를 제공하고 있지 않습니다. 해당 구청에 문의 바랍니다.');
  }

  const areaUrl = SeoulAreas[area];
  if (!areaUrl) {
    throw new ApiError(400, `해당 지역(${area})의 URL이 설정되어 있지 않습니다.`);
  }

  const req = Array.from({ length: 11 }, (_, idx) => {
    return API.get<PageDto<SeoulGuAddressType>>(areaUrl, {
      params: { page: idx + 1, perPage, serviceKey: apiKey },
    });
  });

  try {
    const res = await Promise.all(req);

    const result: AddressDto[] = [];

    res.forEach(({ data }) => {
      data.data.forEach((d) => {
        if (d) {
          let converted: AddressDto = {
            gu: area,
            lat: d.위도,
            lon: d.경도,
            fullAddress: getFullAddress(d) ?? '-',
          };
          result.push(converted);
        }
      });
    });

    return result;
  } catch (err: any) {
    throw new ApiError(500, '데이터를 가져오는 중 오류가 발생했습니다.');
  }
};

function getFullAddress(data: SeoulGuAddressType) {
  switch (data.type) {
    case 'Dongdaemun':
      return data.주소 + ' ' + data.상세주소;

    case 'Seodaemun':
      return data['설치장소(도로명)'];

    case 'Gangnam':
      return data['도로명 주소'];

    case 'Gangseo':
      return data['설치장소(도로명주소)'];

    case 'Songpa':
      return data['설치장소'];

    case 'AddressBasicInfo':
    /* falls through */
    default:
      return data['도로명주소'];
  }
}
