import { ApiError } from 'next/dist/server/api-utils';

import { API } from './apiClient';
import { SeoulAreas } from './clothing-categories';

import { SeoulGuAddressType, PageDto, SeoulGuType, AddressDto } from './type';

const SERVICE_UNAVAILABLE = new Set<SeoulGuType>(['Gwangjin', 'Guro', 'Seongdong', 'Mapo', 'Eunpyeong']);
const NO_INFO_PROVIDED = new Set<SeoulGuType>(['Gangdong', 'Gangbuk', 'Nowon', 'Dobong', 'Yongsan', 'Jung', 'Dongjak']);

export const fetchArea = async (area: SeoulGuType, perPage: number) => {
  const apiKey = process.env.NEXT_PUBLIC_GO_DATA_DECODING_KEY;

  if (!apiKey) {
    throw new ApiError(403, 'API 키가 설정되지 않았습니다. 환경 변수를 확인하세요.');
  }

  if (SERVICE_UNAVAILABLE.has(area)) {
    throw new ApiError(404, '해당지역은 서비스 준비중입니다🐥');
  }

  if (NO_INFO_PROVIDED.has(area)) {
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
          const converted: AddressDto = {
            gu: area,
            lat: Number(d.위도),
            lng: Number(d.경도),
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
      return `${data.주소} ${data.상세주소}`;

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
