import { CategoryInfo, SeoulGuType } from './type';

const Clothes: CategoryInfo = {
  type: 'Clothes',
  name: '의류',
  collectable: ['옷, 셔츠', '바지', '원피스', '자켓 등', '과 같이 사람이 입는 모든 종류의 의류'],
  not_collectable: [
    '찢어지거나 훼손된 의류',
    '오물 또는 이물질이 뭍은 세탁하지 않은 제품',
    '동물의 털 및 배설물이 뭍은 의류',
    '양말',
    '속옷',
    '걸레',
  ],
};
const Bedding: CategoryInfo = {
  type: 'Bedding',
  name: '이불 및 침구류',
  collectable: ['얇은 이불', '누비 이불', '커튼, 카펫', '담요'],
  not_collectable: [
    '오물 또는 이물질이 뭍은 세탁하지 않은 제품',
    '동물의 털 및 배설물이 뭍은 이불',
    '솜이불, 솜베개',
    '방석',
    '라텍스 침구,쿨매트',
    '전기장판, 온수장판',
    '스티로폼 알갱이',
  ],
};

const Bags: CategoryInfo = {
  type: 'Bags',
  name: '가방류',
  collectable: ['일반 가방'],
  not_collectable: ['오물 또는 이물질이 뭍은 세탁하지 않은 제품', '동물의 털 및 배설물이 뭍은 의류', '바퀴달린 가방', '캐리어'],
};

const Shoes: CategoryInfo = {
  type: 'Shoes',
  name: '신발류',
  collectable: ['운동화'],
  not_collectable: ['신발도 한짝만 있는 경우', '실내화', ' 장화, 레인부츠', '스케이트, 스키신발, 바퀴달린신발.'],
};

const Etc: CategoryInfo = {
  type: 'Etc',
  name: '기타',
  collectable: ['모자', '커튼, 카펫'],
  not_collectable: ['반려동물 집', '카시트', '악세사리류', '수건, 걸레', '속옷', '큰 인형'],
};

const CategoryInfoList = [Clothes, Bedding, Bags, Shoes, Etc];

const SeoulAreas: Record<SeoulGuType, string | undefined> = {
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

export { CategoryInfoList, SeoulAreas };
