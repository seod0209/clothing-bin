'use client';
import React, { FC } from 'react';
import styled from 'styled-components';

import Theme from '@/styles/theme';

import GNB from '../common/gnb';
import SearchAndMap from '../search-and-map';

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

const Main: FC = () => {
  return (
    <MainContainer>
      <MainInner>
        <GNB />
        <SearchAndMap />
      </MainInner>
    </MainContainer>
  );
};

export default Main;
