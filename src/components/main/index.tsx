'use client';
import React, { FC } from 'react';
import styled from 'styled-components';

import GNB from '../common/gnb';
import SearchAndMap from '../search-and-map';
import Script from 'next/script';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
  }
`;

const Main: FC = () => {
  return (
    <MainContainer>
      <GNB />
      <SearchAndMap />
      <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" strategy="afterInteractive" async />
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        async
      />
    </MainContainer>
  );
};

export default Main;
