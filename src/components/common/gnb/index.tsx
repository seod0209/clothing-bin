'use client';
import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import { PiLockers } from 'react-icons/pi';

import theme from '@/styles/theme';
import { useIsMobile } from '@/hooks/useIsMobile';

import TextButton from '../buttons/TextButton';
import { H1, H2 } from '../text';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes';
import SideMenu from '../menu/SideMenu';

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

  const listItems = [
    { name: '이용 가이드', onClick: toGuide },
    { name: '직접 버림', onClick: toMain },
    { name: '버려 드림', onClick: toThrow },
  ];

  return (
    <GNBContainer>
      <GNBInner>
        <LeftSideConatiner onClick={toMain}>
          <PiLockers size={isMobile ? 28 : 36} color="green" />
          <H1>옷체통</H1>
        </LeftSideConatiner>
        {isMobile ? (
          <RightSideContainer>
            <SideMenu items={listItems} />
          </RightSideContainer>
        ) : (
          <RightSideContainer>
            {listItems.map((item) => (
              <TextButton key={`${item.name}_DE`} onClick={item.onClick}>
                <H2>{item.name}</H2>
              </TextButton>
            ))}
          </RightSideContainer>
        )}
      </GNBInner>
    </GNBContainer>
  );
};

export default GNB;
