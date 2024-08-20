const nextJest = require('next/jest');

// Next.js 에게 경로를 제공
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['/Users/mac/Desktop/clothing-bin/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '/Users/mac/Desktop/clothing-bin/src/$1', // src 폴더를 기준으로 경로를 매핑.
  },
  testMatch: [
    '/Users/mac/Desktop/clothing-bin/__tests__/**/*.{ts,js,jsx,tsx,mjs}',
    '/Users/mac/Desktop/clothing-bin/?(*.)(spec|test).{ts,js,jsx,tsx,mjs}',
  ],
};

// createJestConfig는 next/jest가 비동기식인 Next.js 구성을 로드할 수 있도록 이러한 방식으로 내보내짐
module.exports = createJestConfig(customJestConfig);
