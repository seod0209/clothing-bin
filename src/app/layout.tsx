import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import StyledComponentRegistry from '@/lib/styled-components-registry';
import { Pretendard } from '@/styles/fonts';

export const metadata: Metadata = {
  title: '옷체통',
  description: '서울시 헌옷 수거함 위치 정보 표시',
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
    <html lang="ko">
      <body className={`${Pretendard.className}`}>
        <StyledComponentRegistry>
          <main>{children}</main>
          <Script
            strategy="beforeInteractive"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
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
  );
}
