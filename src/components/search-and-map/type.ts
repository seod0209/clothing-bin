import { AddressDto, SeoulGuType } from '@/app/api/type';

export class MarkerData {
  x: number; // 위도 latitude
  y: number; // 경도 longitude
  address: string;
  gu: SeoulGuType | null;
  constructor(data?: AddressDto) {
    this.x = data ? Number(data.위도) : 0;
    this.y = data ? Number(data.경도) : 0;
    this.address = data ? data.도로명주소 : '';
    this.gu = data ? this.convertGuName(data.도로명주소) : null;
  }
  private convertGuName(address: string): SeoulGuType {
    const start = address.indexOf('서울특별시') + 5;
    const end = address.indexOf('구') + 1;
    const result: string = address.substring(start, end).trim();

    return SeoulGuName[result];
  }
}

export const SeoulGuName: { [key: string]: SeoulGuType } = {
  종로구: 'Jongno',
  중구: 'Jung',
  용산구: 'Yongsan',
  성동구: 'Seongdong',
  광진구: 'Gwangjin',
  동대문구: 'Dongdaemun',
  중랑구: 'Jungnang',
  성북구: 'Seongbuk',
  강북구: 'Gangbuk',
  도봉구: 'Dobong',
  노원구: 'Nowon',
  은평구: 'Eunpyeong',
  서대문구: 'Seodaemun',
  마포구: 'Mapo',
  양천구: 'Yangcheon',
  강서구: 'Gangseo',
  구로구: 'Guro',
  금천구: 'Geumcheon',
  영등포구: 'Yeongdeungpo',
  동작구: 'Dongjak',
  관악구: 'Gwanak',
  서초구: 'Seocho',
  강남구: 'Gangnam',
  송파구: 'Songpa',
  강동구: 'Gangdong',
};
