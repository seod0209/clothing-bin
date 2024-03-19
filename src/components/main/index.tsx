"use client";
import React, { FC } from "react";
import styled from "styled-components";

import theme from "@/styles/theme";
import GNB from "../common/gnb";

const MainContainer = styled.div`
  ${theme.common.flexCenter};
  width: 100%;
`;
const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
  }
`;

const Main: FC = () => {
  return (
    <MainContainer>
      <MainInner>
        <GNB />
      </MainInner>
    </MainContainer>
  );
};

export default Main;
