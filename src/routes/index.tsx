export type Route = string | ((...args: any[]) => string);

export const routes = {
  main: '/',
  guide: '/guide',
  throw: '/throw',
};
