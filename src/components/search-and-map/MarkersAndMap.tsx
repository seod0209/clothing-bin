import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from '@/styles/theme';

const MarkersAndMapContainer = styled.div`
  ${theme.common.flexCenter};
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapBox = styled.div`
  width: 100%;
`;

interface MarkersAndMapProps {
  currLocation: string;

  binLocations: string[];
}

const SearchAndMap: FC<MarkersAndMapProps> = ({ currLocation, binLocations }) => {
  useEffect(() => {}, []);
  return (
    <MarkersAndMapContainer>
      <MapBox id="map"></MapBox>
    </MarkersAndMapContainer>
  );
};

export default SearchAndMap;
