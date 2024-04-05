import { FC, type ButtonHTMLAttributes, PropsWithChildren, useMemo, useState, ReactNode, ReactElement } from 'react';
import styled from 'styled-components';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Theme from '@/styles/theme';

const NestedListContainer = styled.div`
  ${Theme.common.flexCenterColumn}

  width: 100%;
  height: fit-content;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid;
`;

const NestedListHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 8px;
  width: 100%;
  height: 4em;

  background-color: #c3db72;
  &:hover {
    background-color: #c3db00;
  }

  &:active {
    background-color: #afcf42;
  }
`;

const HeaderName = styled.span``;

const NestedListInner = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 16px;
`;

interface NestedListProps extends ButtonHTMLAttributes<HTMLDivElement> {
  headerName: string;
}

const NestedList: FC<PropsWithChildren<NestedListProps>> = ({
  headerName,

  children = undefined,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NestedListContainer onClick={() => setIsOpen(!isOpen)} {...props}>
      <NestedListHeader>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        <HeaderName>{headerName}</HeaderName>
      </NestedListHeader>

      <NestedListInner style={{ display: isOpen ? 'flex' : 'none' }}>{children}</NestedListInner>
    </NestedListContainer>
  );
};

export default NestedList;
