'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import { ModalUIProvider } from '@/components/common/modal/context/ModalProvider';

import Main from '@/components/main';
import SearchAddress from '@/components/search-address';

const MapAndMarkers = dynamic(() => import('@/components/map-and-markers'), {
  // Naver Maps API는 브라우저에서 실행되므로 클라이언트 사이드에서만 로드해야함.
  // naver.maps는  클라이언트 사이드 라이브러리.
  ssr: false, // 따라서, 서버 사이드 렌더링을 비활성화
});

// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-4-migrating-pages
export default function Page() {
  // XXX: 전역관리고 수정 필요
  const [searchedAddress, setSearchedAddress] = useState<string>('');

  return (
    <ModalUIProvider>
      <Main>
        <SearchAddress searchedAddress={searchedAddress} setSearchedAddress={setSearchedAddress} />
        <MapAndMarkers searchedAddress={searchedAddress} setSearchedAddress={setSearchedAddress} />
      </Main>
    </ModalUIProvider>
  );
}
