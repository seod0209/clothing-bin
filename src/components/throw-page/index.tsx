'use client';
import React, { FC } from 'react';
import styled from 'styled-components';

import Theme from '@/styles/theme';

const ThrowPageContainer = styled.div`
  ${Theme.common.flexCenter};
  width: 100%;
`;

const ThrowPageInner = styled.div`
  padding: 20px 16px;
  width: 1160px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ThrowPage: FC = () => {
  return (
    <ThrowPageContainer>
      <ThrowPageInner>버려드림</ThrowPageInner>
    </ThrowPageContainer>
  );
};

export default ThrowPage;
