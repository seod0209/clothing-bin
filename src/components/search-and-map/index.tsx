'use client';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import Theme from '@/styles/theme';
import SearchAddress from './SearchAddress';
import MarkersAndMap from './MarkersAndMap';

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

const SearchAndMap: FC = () => {
  const [currAddress, setCurrAddress] = useState<string>('');

  return (
    <SearchAndMapContainer>
      <SearchAddress setCurrAddress={setCurrAddress} />
      <MarkersAndMap currLocation={currAddress} binLocations={[]} />
    </SearchAndMapContainer>
  );
};

export default SearchAndMap;
