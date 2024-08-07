//15106473/v1/uddi:c0982c3d-865d-4a96-897c-a67f24baeed5?page=1&perPage=10

import { API } from './apiClient';
import { SeoulGuAddressType, PageDto, SeoulGuType } from './type';

const SeoulAreas = {
  Gangnam: '15127131/v1/uddi:a9873b46-9551-407a-aff5-a3a77befb3d4',
  Gangseo: '15127065/v1/uddi:61d05f04-08d8-4e4f-ba17-8d6690775590',
  Gwanak: '15076398/v1/uddi:6dec2a8d-6404-4318-8767-85419b3c45a0',
  Geumcheon: '15106679/v1/uddi:2a54e58d-6b54-46de-9de1-cc3a6887ccb8',
  Dongdaemun: '15112228/v1/uddi:67d42349-302e-40f6-af11-c496e532d090',
  Seodaemun: '15068863/v1/uddi:d306939e-fc51-4317-9fac-e8e610a02bb4',
  Seocho: '15126956/v1/uddi:e1fc1767-5925-44f0-9eeb-ab332587885e',
  Seongbuk: '15127036/v1/uddi:f3c82d6f-498a-4e75-989b-e3fdc4720413',
  Songpa: '15127100/v1/uddi:be5bca9a-0dbd-4a2a-b262-d5d7d8a6a4b0',
  Yangcheon: '15105196/v1/uddi:bafee858-4544-4459-9a19-c186818a120f',
  Yeongdeungpo: '15106473/v1/uddi:c0982c3d-865d-4a96-897c-a67f24baeed5',
  Jongno: '15104622/v1/uddi:34ca4455-457d-4a50-ad1a-9b373f0f08eb',
  Jungnang: '15127304/v1/uddi:78d8746d-a497-4d27-9c0a-ddc69e71710f',

  /** 위도경도 추가 필요 */
  Gwangjin: '15109594/v1/uddi:d63e68bf-e03d-4d3c-a203-fd9add3d372c',
  Guro: '15068871/v1/uddi:4205fe5b-ffe3-4730-a57e-afbd8c338dc7',
  Seongdong: '15126958/v1/uddi:b8d0dfd5-cefa-4cb2-8d35-fc6b5f2507b0',

  /** 파일데이터 수정 필요 */
  Mapo: '',
  Eunpyeong: '',
  /** 미제공 */
  Gangdong: '',
  Gangbuk: '',
  Nowon: '',
  Dobong: '',
  Yongsan: '',
  Jung: '',
  Dongjak: '15068021/v1/uddi:11168719-6301-4ff2-873d-e44e26511d89',
};

export const fetchArea = async (area: SeoulGuType, perPage: number) => {
  const req = Array.from({ length: 11 }, (_, idx) => {
    return API.get<PageDto<SeoulGuAddressType>>(SeoulAreas[area], {
      params: { page: idx + 1, perPage, serviceKey: process.env.NEXT_PUBLIC_GO_DATA_DECODING_KEY },
    });
  });
  const res = await Promise.all(req);
  const result: SeoulGuAddressType[] = [];
  res.forEach(({ data }) => {
    console.log(area, data);
    data.data.forEach((d) => {
      if (d) {
        result.push(d);
      }
    });
  });

  return result;
};
