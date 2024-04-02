'use client';
import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import { PiLockers } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';

import theme from '@/styles/theme';
import { useIsMobile } from '@/hooks/useIsMobile';

import TextButton from '../buttons/TextButton';
import IconButton from '../buttons/IconButton';
import { H1, H2 } from '../text';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes';

const GNBContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GNBInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;

  width: 1160px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LeftSideConatiner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 100%;
  min-width: 180px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
const RightSideContainer = styled.div`
  ${theme.common.flexCenter}
  gap: 16px;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const GNB: FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const toMain = useCallback(() => router.push(routes.main), []);
  const toGuide = useCallback(() => router.push(routes.guide), []);
  const toThrow = useCallback(() => router.push(routes.throw), []);

  return (
    <GNBContainer>
      <GNBInner>
        <LeftSideConatiner onClick={toMain}>
          <PiLockers size={isMobile ? 28 : 36} color="green" />
          <H1>옷체통</H1>
        </LeftSideConatiner>
        {isMobile ? (
          <RightSideContainer>
            <IconButton>
              <AiOutlineMenu size={20} />
            </IconButton>
          </RightSideContainer>
        ) : (
          <RightSideContainer>
            <TextButton onClick={toGuide}>
              <H2>이용 가이드</H2>
            </TextButton>
            <TextButton onClick={toMain}>
              <H2>직접 버림</H2>
            </TextButton>
            <TextButton onClick={toThrow}>
              <H2>버려 드림</H2>
            </TextButton>
          </RightSideContainer>
        )}
      </GNBInner>
    </GNBContainer>
  );
};

export default GNB;
