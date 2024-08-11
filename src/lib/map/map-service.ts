import { AddressDto, SeoulGuType } from '@/app/api/type';

export class MarkerData {
  lat: number; // 위도 latitude
  lng: number; // 경도 longitude
  address: string;
  gu: SeoulGuType | null;
  constructor(data?: AddressDto) {
    this.lat = data ? data.lat : 0;
    this.lng = data ? data.lng : 0;
    this.address = data ? data.fullAddress : '';
    this.gu = data ? data.gu : null;
  }
}

export interface MapService {
  initializeMap(containerId: string, options: any): void;

  setCenter(lat: number, lng: number): void;

  setMarker(lat: number, lng: number, charactor: string): void;

  setMarkers(markerData: MarkerData[]): void;

  setCurrentLocation(lat: number, lng: number): void;

  getMap(): void;

  getMarkers(): void;

  geocode(address: string, callback: (pos: { lat: number; lng: number }) => void): void;

  addZoomListener(callback: () => void): void;

  addDragendListener(callback: () => void): void;

  removeListener(listener: any): void;
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
