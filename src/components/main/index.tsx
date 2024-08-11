'use client';
import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import Theme from '@/styles/theme';

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
  return (
    <MainContainer>
      <MainInner>
        <SearchAndMapContainer>{children}</SearchAndMapContainer>
      </MainInner>
    </MainContainer>
  );
};

export default Main;
