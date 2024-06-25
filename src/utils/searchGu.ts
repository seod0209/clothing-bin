import { SeoulGuType } from '@/app/api/type';

const SeoulGuName = [
  '종로구',
  '중구',
  '용산구',
  '성동구',
  '광진구',
  '동대문구',
  '중랑구',
  '성북구',
  '강북구',
  '도봉구',
  '노원구',
  '은평구',
  '서대문구',
  '마포구',
  '양천구',
  '강서구',
  '구로구',
  '금천구',
  '영등포구',
  '동작구',
  '관악구',
  '서초구',
  '강남구',
  '송파구',
  '강동구',
];

// Record는 TypeScript에서 제공하는 유틸리티 타입 중 하나로,객체의 타입을 정의할 때 사용
// - string 타입을 키(key)로 가지고,
// - SeoulGuType 타입을 값(value)으로 가지는 객체를 나타냄
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };
const guToTypeMap: Record<string, SeoulGuType> = {
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

const regex = new RegExp(`(${SeoulGuName.join('|')})`);

function searchGu(address: string): SeoulGuType | null {
  const match = address.match(regex);
  if (match) {
    const gu = match[0].trim();
    return guToTypeMap[gu] || null;
  } else {
    return null;
  }
}
export default searchGu;
