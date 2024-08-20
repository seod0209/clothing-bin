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

const Guide: FC = () => {
  return (
    <GuideContainer>
      <GuideInner>
        <Title>의류 수거 시 주의사항 🚮</Title>
        <StyledUl>
          <StyledLi>
            👗 재사용 가능한 옷만: 사람이 입을 수 있는 옷만 넣어야 해요. 재활용보다는 재사용 가능한 섬유를 찾으세요.
          </StyledLi>
          <StyledLi>🧼 세탁 후 완전히 건조된 옷: 세탁하고 완전히 건조된 옷만 넣어야 해요.</StyledLi>
          <StyledLi>
            🚫 불가능한 항목: 자투리천, 지저분한 옷, 착용 불가능한 옷, 오물 또는 이물질이 묻은 세탁하지 않은 제품은 넣지
            말아주세요.
          </StyledLi>
        </StyledUl>
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
