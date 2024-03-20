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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.className}`}>
        <StyledComponentRegistry>
          <main>{children}</main>
          <Script
            strategy="beforeInteractive"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${env.process.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
          />
        </StyledComponentRegistry>
      </body>
    </html>
  );
}
