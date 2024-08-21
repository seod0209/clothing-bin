'use client';

import { FC } from 'react';
import styled from 'styled-components';

const InfoLayout = styled.div`
  width: 100%;
  max-width: 840px;
  margin-top: 20px;
  margin-bottom: 1px;
`;
const InfoInner = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-left: 2px;
  color: inherit;
  fill: inherit;
`;
const ContentLayout = styled.div`
  flex: 1 1 0px;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Title = styled.span`
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  padding: 3px 2px;
  text-align: left;
  font-weight: 600;
  font-size: 20px;
`;

const StyledUl = styled.ul`
  padding-left: 8px;
`;
const StyledLi = styled.li`
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  padding: 3px 2px;
  text-align: left;
`;
const ButtonText = styled.div`
  text-align: center;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  vertical-align: middle;
`;

const MainInfo: FC = () => {
  return (
    <InfoLayout>
      <InfoInner>
        <ContentLayout>
          <Title>의류수거함 정보 📍</Title>
          <StyledUl>
            <StyledLi>🚫 개입사업자가 무단으로 설치한 의류수거함의 위치는 포함되지 않아요.</StyledLi>
            <StyledLi>🏢 의류수거함 위치 정보는 관할 시/구청 홈페이지를 기반으로 제공돼요.</StyledLi>
          </StyledUl>
          <Title>서비스 제공 지역 🌍</Title>
          <StyledUl>
            <StyledLi>서울시 25개 구 중 20개 구에서 의류수거함 위치 데이터가 제공돼요.</StyledLi>
            <StyledLi>🛑 서비스 미제공 지역: 강북구, 노원구, 용산구, 도봉구, 중구</StyledLi>
          </StyledUl>
        </ContentLayout>
      </InfoInner>
    </InfoLayout>
  );
};

export default MainInfo;
