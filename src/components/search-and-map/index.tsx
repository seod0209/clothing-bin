import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from '@/styles/theme';
import SearchAddress from './SearchAddress';
import MarkersAndMap from './MarkersAndMap';

const SearchAndMapContainer = styled.div`
  ${theme.common.flexCenter};

  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
