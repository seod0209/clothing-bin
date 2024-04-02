'use client';
import React, { FC } from 'react';
import styled from 'styled-components';

import Theme from '@/styles/theme';

const GuideContainer = styled.div`
  ${Theme.common.flexCenter};
  width: 100%;
`;

const GuideInner = styled.div`
  padding: 20px 16px;
  width: 1160px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Guide: FC = () => {
  return (
    <GuideContainer>
      <GuideInner>가이드요</GuideInner>
    </GuideContainer>
  );
};

export default Guide;
