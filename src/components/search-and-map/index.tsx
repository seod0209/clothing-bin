'use client';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { useMap } from '@/hooks/useMap';
import Theme from '@/styles/theme';

import SearchAddress from './SearchAddress';
import MarkersAndMap from './MarkersAndMap';

import Loader from '../common/Loader';

const SearchAndMapContainer = styled.div`
  ${Theme.common.flexCenterColumn};
  gap: 16px;
  padding: 20px 16px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8px 0;
  }
`;

const MarkersAndMapContainer = styled.div`
  position: relative;
  ${Theme.common.flexCenter};
  width: 100%;

  background-color: #ebedeb;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchAndMap: FC = () => {
  const { isLoading } = useMap();
  const [currAddress, setCurrAddress] = useState<string>('');

  return (
    <SearchAndMapContainer>
      <SearchAddress setCurrAddress={setCurrAddress} />
      <MarkersAndMapContainer>
        {isLoading && <Loader />}
        <MarkersAndMap />
      </MarkersAndMapContainer>
    </SearchAndMapContainer>
  );
};

export default SearchAndMap;
