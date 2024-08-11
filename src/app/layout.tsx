import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import StyledComponentRegistry from '@/lib/styled-components-registry';
import ReactQueryClientProvider from '@/lib/query-provider';

import { Pretendard } from '@/styles/fonts';
import GNB from '@/components/common/gnb';

export const metadata: Metadata = {
  title: '옷체통',
  description: '서울시 헌옷 수거함 위치 정보 표시',
  verification: {
    google: 'UpcNcYqthSmZULOUf38J0t5w1Ede2tsXexbMikR5eoQ',
    other: {
      'naver-site-verification': '388bc2abab53cfe3c86d7214154c3c4b4f95687b',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: 'white',
};

// Add kakao type to global object
declare global {
  interface Window {
    kakao: any;
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <html lang="ko">
        <body className={`${Pretendard.className}`}>
          <StyledComponentRegistry>
            <header>
              <GNB />
            </header>
            <main>{children}</main>
            <Script
              strategy="beforeInteractive"
              src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder&callback=initMap`}
            />
            <Script
              // Scripts with beforeInteractive enabled only work within root layout
              // beforeInteractive: Run before hydration
              strategy="beforeInteractive"
              // Because the useEffect code runs before the script, maps properties cannot be found
              src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`}
            />
          </StyledComponentRegistry>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
