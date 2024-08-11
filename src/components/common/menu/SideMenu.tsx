'use client';
import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { AiOutlineMenu } from 'react-icons/ai';

import theme from '@/styles/theme';

import TextButton from '../buttons/TextButton';
import IconButton from '../buttons/IconButton';
import { useIsMobile } from '../../../hooks/useIsMobile';

const SideMenuContainer = styled.div`
  ${theme.common.flexCenter}
  justify-content: flex-end;

  gap: 16px;

  width: 100%;
`;

const ListContainer = styled.div<{ $isopen: string }>`
  position: absolute;
  top: 5%;
  right: 16px;

  visibility: ${({ $isopen }) => ($isopen === 'true' ? 'visible' : 'hidden')};

  width: 50%;

  background: #ffffff;
  box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);

  border-radius: 8px;
  z-index: 101;

  @media screen and (max-width: 768px) {
    top: 8%;
  }
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
interface SideMenuProps {
  items: {
    name: string;
    onClick: () => void;
  }[];
}
const SideMenu: FC<SideMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SideMenuContainer>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu size={20} />
      </IconButton>
      <ListContainer id="list-container" $isopen={String(isOpen)}>
        {items.map((item) => (
          <TextButton
            key={item.name}
            onClick={() => {
              setIsOpen(false);
              item.onClick();
            }}
          >
            <Text>{item.name}</Text>
          </TextButton>
        ))}
      </ListContainer>
    </SideMenuContainer>
  );
};

export default SideMenu;
