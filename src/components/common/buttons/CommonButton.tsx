import {
  FC,
  type ButtonHTMLAttributes,
  PropsWithChildren,
  useMemo,
} from "react";
import styled from "styled-components";

import Theme from "@/styles/theme";

const CommonButtonContainer = styled.button<{
  $isfull?: string;
}>`
  ${Theme.common.flexCenterColumn}
  position: relative;
  padding: 6px 16px;
  width: ${({ $isfull }) => ($isfull ? "100%" : "fit-content")};
  min-width: ${({ $isfull }) => ($isfull ? "100%" : "86px")};

  height: 36px;

  border-radius: 8px;
  border: 2px solid;

  &:hover {
    .common_button_opacity {
      background-color: #ffffff33;
    }
  }

  &:active {
    .common_button_opacity {
      background-color: #00000033;
    }
  }
  &:disabled {
    border-color: ${({ theme }) => theme.colors.stroke.primary};
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFull?: boolean;
}

const CommonButton: FC<PropsWithChildren<CommonButtonProps>> = ({
  isFull = false,
  children = undefined,
  ...props
}) => {
  return (
    <CommonButtonContainer {...props} $isfull={isFull ? "isfull" : undefined}>
      {children}
    </CommonButtonContainer>
  );
};
