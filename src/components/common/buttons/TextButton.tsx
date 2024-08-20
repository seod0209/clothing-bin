import { FC, type ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

const TextButtonContainer = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 8px;
  width: fit-contents;
  height: 40px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    text-underline-position: under;
    text-decoration-color: #00000033;
  }
  &:active {
    text-decoration: underline;
    text-underline-position: under;
    text-underline-offset: 2px;
    text-decoration-color: black;
  }
`;

const TextButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children = undefined, ...props }) => (
  <TextButtonContainer {...props}>{children}</TextButtonContainer>
);

export default TextButton;
