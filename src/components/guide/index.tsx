'use client';

import React, { FC } from 'react';
import styled from 'styled-components';

import { CategoryInfoList } from '@/app/api/clothing-categories';

import Theme from '@/styles/theme';
import NestedList from '../common/list/NestedList';

const GuideContainer = styled.div`
  ${Theme.common.flexCenter};
  width: 100%;
`;

const GuideInner = styled.div`
  padding: 20px 16px;
  width: 1160px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  align-items: flex-start;
  width: 100%;
`;

const CollectableInfoContainer = styled.div`
  align-items: flex-start;
  width: 200px;
`;

const H2 = styled.div`
  display: flex;
  align-items: center;
  color: green;
  font-size: 1.5em;
  font-weight: bold;
`;

const Content = styled.p`
  line-height: 28px;
`;

const CategoriesContainer = styled.div`
  ${Theme.common.flexCenter};
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 16px;
  width: 100%;
`;

const CategoryInfo = styled.div`
  ${Theme.common.flexCenter};
  gap: 10em;
  width: 100%;

  @media screen and (max-width: 768px) {
    ${Theme.common.flexCenterColumn};
    gap: 2em;
  }
`;

const Guide: FC = () => {
  return (
    <GuideContainer>
      <GuideInner>
        <InfoContainer>
          <H2>옷체통은 다음과 같은 정보를 제공해요.</H2>
          <Content>- 개입사업자가 수익 창출을 목적으로 무단으로 설치한 의류수거함의 위치정보는 포함하지 아니한다.</Content>
          <Content>- 본 서비스의 의류수거함 위치정보는 관할 시/구청 홈페이지에서 제공하는 위치 정보를 기반으로 한다.</Content>
          <Content>- 2024년 기준 서울시 총 25개구 중에서 의류수거함 위치데이터를 제공하는 구는 20개 구로 확인된다. </Content>
          <Content>- 서비스 미제공 지역: 강북구, 노원구, 용산구, 도봉구, 중구 </Content>
        </InfoContainer>
        <InfoContainer>
          <H2>
            재활용보다는
            <H2 style={{ color: 'orange' }}> 사람이 재사용 </H2>가능한 제품들을 넣어야 합니다.
          </H2>
          <Content>재사용 가능한 섬유를 찾고 있습니다. 헷갈릴땐 생각하세요! 이걸 사람이 입을수 있는지?</Content>
          <Content>세탁하여 완전히 건조한 옷을 의류수거함에 배출해주세요.</Content>
          <Content>
            간편하게 비용을 들이지 않고 의류를 처분하는 대신, 나에게서 수명을 잃은 옷이 새 생명을 얻어 필요한 사람에게 갈거에요.
          </Content>
          <Content>봉제공장에서 절단된 자투리천이나 지저분한 옷,착용이 불가능한 옷은 재활용 불가</Content>
          <Content>
            &apos;오물 또는 이물질이 뭍은 세탁하지 않은 제품&apos;은 넣지 말아주세요. 재사용가능한 다른 의류들까지
            불가능하게됩니다.
          </Content>
        </InfoContainer>
        <CategoriesContainer>
          {CategoryInfoList.map((info) => (
            <NestedList key={info.name} headerName={info.name}>
              <CategoryInfo>
                <CollectableInfoContainer>
                  <H2>가능 품목</H2>
                  {info.collectable.map((c) => (
                    <Content>{c}</Content>
                  ))}
                </CollectableInfoContainer>
                <CollectableInfoContainer>
                  <H2 style={{ color: 'orange' }}>불가능 품목</H2>
                  {info.not_collectable.map((not) => (
                    <Content>{not}</Content>
                  ))}
                </CollectableInfoContainer>
              </CategoryInfo>
            </NestedList>
          ))}
        </CategoriesContainer>
      </GuideInner>
    </GuideContainer>
  );
};

export default Guide;
