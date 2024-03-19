import React, { FC } from "react";
import styled from "styled-components";

import { PiLockers } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";

import theme from "@/styles/theme";

import { H1, H2 } from "../text";
import TextButton from "../buttons/TextButton";

const GNBContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  width: 100%;
`;

const LeftSideConatiner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  width: 100%;
  min-width: 180px;
`;
const RightSideContainer = styled.div`
  ${theme.common.flexCenter}
  width: 100%;
`;

const GNB: FC = () => {
  return (
    <GNBContainer>
      <LeftSideConatiner>
        <PiLockers size={36} color="green" />
        <H1>옷체통</H1>
      </LeftSideConatiner>
      <RightSideContainer>
        <TextButton>
          <H2>이용 가이드</H2>
        </TextButton>
        <TextButton>
          <H2>직접 버림</H2>
        </TextButton>
        <TextButton>
          <H2>버려 드림</H2>
        </TextButton>
      </RightSideContainer>
    </GNBContainer>
  );
};

export default GNB;
