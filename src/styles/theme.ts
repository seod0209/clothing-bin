// const pixelToRem = (size: number) => `${size / 16}rem`;

const colors = {
  background: {
    primary: "#FFFFFF",
    secondary: "#F7F7FA",
    tertiary: "#EDEDF0",
  },
  disable: "#E8E8E8",
  light_active: {
    primary: "#EDEDF0",
  },
  stroke: {
    primary: "#E4E4E7",
  },
  text: {
    primary: "#2B2D36",
    secondary: "#55575E",
    tertiary: "#86878C",
  },

  violet: {
    100: "#845EF7",
    200: "#6741D9",
  },
  red: {
    100: "#FF6B6B",
    200: "#E03131",
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

export type ColorType = typeof colors;
export type CommonFlexType = typeof common;

const theme = {
  colors,
  common,
};

export default theme;
