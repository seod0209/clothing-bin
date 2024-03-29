// const pixelToRem = (size: number) => `${size / 16}rem`;

const colors = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F7F7FA',
    tertiary: '#EDEDF0',
  },
  disable: '#E8E8E8',
  light_active: {
    primary: '#EDEDF0',
  },
  stroke: {
    primary: '#E4E4E7',
  },
  text: {
    primary: '#2B2D36',
    secondary: '#55575E',
    tertiary: '#86878C',
  },

  violet: {
    100: '#845EF7',
    200: '#6741D9',
  },
  red: {
    100: '#FF6B6B',
    200: '#E03131',
  },
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const typography = {
  60: {
    fontFamily: 'PyeongChangPeace-Bold',
    fontSize: 60,
  },
  24: {
    fontFamily: 'Pretendard Variable',
    fontSize: 24,
  },
  20: {
    fontFamily: 'Pretendard Variable',
    fontSize: 20,
  },
  18: {
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
  },
  16: {
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
  },
  14: {
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
  },
  12: {
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
  },
};

export type ColorType = typeof colors;
export type CommonFlexType = typeof common;
export type TypographyType = typeof typography;

const theme = {
  colors,
  common,
  typography,
};

export default theme;
