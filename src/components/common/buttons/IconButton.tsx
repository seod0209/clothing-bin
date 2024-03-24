import { FC, type ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

import Theme from '@/styles/theme';

const IconButtonContainer = styled.button`
  ${Theme.common.flexCenterColumn}
  position: relative;
  padding: 8px;
  width: fit-content;

  border-radius: 50px;

  &:hover {
    background-color: #ffffff33;
  }

  &:active {
    background-color: #00000033;
  }
  &:disabled {
    border-color: ${({ theme }) => theme.colors?.stroke?.primary};
    background-color: ${({ theme }) => theme.colors?.background?.tertiary};
    box-shadow: none;
    color: ${({ theme }) => theme.colors?.text?.tertiary};
  }
`;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({ children = undefined, ...props }) => {
  return <IconButtonContainer {...props}>{children}</IconButtonContainer>;
};

export default IconButton;
