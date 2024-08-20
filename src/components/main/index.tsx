'use client';

import React, { FC, PropsWithChildren, useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Theme from '@/styles/theme';

import SearchAddress from '@/components/search-address';

const MapAndMarkers = dynamic(() => import('@/components/map-and-markers'), {
  // Naver Maps API는 브라우저에서 실행되므로 클라이언트 사이드에서만 로드해야함.
  // naver.maps는  클라이언트 사이드 라이브러리.
  ssr: false, // 따라서, 서버 사이드 렌더링을 비활성화
});

const MainContainer = styled.div`
  ${Theme.common.flexCenter};
  width: 100%;
`;

const MainInner = styled.div`
  padding: 20px 16px;
  width: 1160px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SearchAndMapContainer = styled.div`
  ${Theme.common.flexCenterColumn};
  gap: 16px;
  padding: 20px 16px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8px 0;
  }
`;

const Main: FC<PropsWithChildren> = ({ children }) => {
  // XXX: 전역관리고 수정 필요
  const [searchedAddress, setSearchedAddress] = useState<string>('');

  return (
    <MainContainer>
      <MainInner>
        <SearchAndMapContainer>
          <SearchAddress searchedAddress={searchedAddress} setSearchedAddress={setSearchedAddress} />
          <MapAndMarkers searchedAddress={searchedAddress} setSearchedAddress={setSearchedAddress} />
        </SearchAndMapContainer>
      </MainInner>
    </MainContainer>
  );
};

export default Main;
