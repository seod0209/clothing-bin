'use client';

import React, { FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { TbHanger } from 'react-icons/tb';
import styled from 'styled-components';

import { useIsMobile } from '@/hooks/useIsMobile';

import { routes } from '@/routes';

import TextButton from '../buttons/TextButton';
import SideMenu from '../menu/SideMenu';
import { H1, H2 } from '../text';

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

  width: 1240px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LeftSideContainer = styled.div`
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const GNB: FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const toMain = useCallback(() => router.push(routes.main), [router]);
  const toGuide = useCallback(() => router.push(routes.guide), [router]);

  const listItems = [{ name: '이용 가이드', onClick: toGuide }];

  return (
    <GNBContainer>
      <GNBInner>
        <LeftSideContainer onClick={toMain}>
          <TbHanger size={isMobile ? 28 : 36} color="green" />
          <H1>헌옷지도</H1>
        </LeftSideContainer>
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
