export interface PageDto<T> {
  page: number;

  perPage: number;

  totalCount: number;

  currentCount: number;

  matchCount: number;

  data: T[];
}

export interface BasicDto {
  연번?: number;

  위도: string;

  경도: string;

  데이터기준일자?: string;
}

export interface AddressDto {
  gu: SeoulGuType;

  lat: number; //위도

  lng: number; //경도

  fullAddress: string;
}

// 영등포구, 종로구, 금천구, 양천구, 중랑구, 서초구, 성북구
interface AddressBasicInfo extends BasicDto {
  type: 'AddressBasicInfo';

  행정동: string;

  도로명주소: string;

  지번주소: string;
}

// 동대문구

interface DongDaeMoon extends BasicDto {
  type: 'Dongdaemun';

  행정동: string;

  주소: string;

  상세주소: string;
}

// 송파구
interface Songpa extends BasicDto {
  type: 'Songpa';

  행정동: string;

  설치장소: string;

  관리단체: string;
}

// 관악구
interface Gwanak extends BasicDto {
  type: 'Gwanak';

  의류수거함: string;

  위치: string;
}

// 서대문구
interface SeoDaeMoon extends BasicDto {
  type: 'Seodaemun';

  행정동: string;

  '설치장소(도로명)': string;

  관리번호: string;

  관리단체: string;
}

interface GangSeo extends BasicDto {
  type: 'Gangseo';

  행정동: string;

  '설치장소(도로명주소)': string;

  '설치장소(지번주소)': string;

  관리번호: string;

  관리단체: string;
}

interface Gangnam extends BasicDto {
  type: 'Gangnam';
  지번주소: string;

  '도로명 주소': string;
}

export type SeoulGuAddressType = AddressBasicInfo | DongDaeMoon | Songpa | SeoDaeMoon | GangSeo | Gangnam;

export type SeoulGuType =
  | 'Jongno'
  | 'Jung'
  | 'Yongsan'
  | 'Seongdong'
  | 'Gwangjin'
  | 'Dongdaemun'
  | 'Jungnang'
  | 'Seongbuk'
  | 'Gangbuk'
  | 'Dobong'
  | 'Nowon'
  | 'Eunpyeong'
  | 'Seodaemun'
  | 'Mapo'
  | 'Yangcheon'
  | 'Gangseo'
  | 'Guro'
  | 'Geumcheon'
  | 'Yeongdeungpo'
  | 'Dongjak'
  | 'Gwanak'
  | 'Seocho'
  | 'Gangnam'
  | 'Songpa'
  | 'Gangdong';

export type CategoryType = 'Clothes' | 'Etc' | 'Bags' | 'Bedding' | 'Shoes';

export interface CategoryInfo {
  type: CategoryType;
  name: string;
  collectable: string[];
  not_collectable: string[];
}
