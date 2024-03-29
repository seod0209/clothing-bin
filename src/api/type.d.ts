export interface PageDto<T> {
  page: number;

  perPage: number;

  totalCount: number;

  currentCount: number;

  matchCount: number;

  data: T[];
}

// 영등포구, 종로구, 금천구, 동대문구
export interface AddressDto {
  행정동: string;

  도로명주소: string;

  지번주소: string;

  위도: string;

  경도: string;

  데이터기준일자: string;
}

// 송파구
// {
//   "연번": 0,
//   "관리단체": "string",
//   "행정동": "string",
//   "설치장소": "string"
// }
// // 서초구
// {
//   "연번": 0,
//   "행정동": "string",
//   "지번주소": "string",
//   "도로명주소": "string"
// }
// // 동작구, 양천구
// {
//   "연번": 0,
//   "행정동": "string",
//   "주소": "string",
//   "데이터기준일자": "string"
// }
// // 구로구, 광진구
// {
//   "행정동": "string",
//   "위치": "string",
//   "기준일자": "string"
// }
// // 중랑구
// {
//   "연번": 0,
//   "행정동": "string",
//   "주소": "string",
//   "기준일자": "string"
// }

// // 관악구
// {
//   "의류수거함": "string",
//   "위치": "string"
// }

// // 서대문구, 강서구
// {
//   "연번": 0,
//   "관리번호": "string",
//   "관리단체": "string",
//   "행정동": "string",
//   "설치장소(도로명)": "string"
// }
// // 강남구
// {
//   "연번": 0,
//   "지번주소": "string",
//   "도로명 주소": "string",
//   "기타": "string"
// }
// // 성동구
// {
//   "순번": 0,
//   "관리번호": "string",
//   "행정동": "string",
//   "설치장소": "string"
// }
// // 성북구
// {
//   "데이터기준일": "string",
//   "연번": 0,
//   "의류수거함 위치": "string"
// }

export type SeoulAreasType =
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
