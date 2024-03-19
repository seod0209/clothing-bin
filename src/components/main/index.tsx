"use-client";

import React, { FC } from "react";
import styled from "styled-components";

import theme from "@/styles/theme";

const MainContainer = styled.div`
  ${theme.common.flexCenter};
  width: 100%;
  padding-bottom: 50px;
`;
const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  width: 620px;

  @media screen and (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
  }
`;

const Main: FC = () => {
  return (
    <MainContainer>
      <MainInner></MainInner>
    </MainContainer>
  );
};

export default Main;
