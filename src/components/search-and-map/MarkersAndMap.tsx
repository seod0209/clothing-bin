import React, { FC } from 'react';
import styled from 'styled-components';

import theme from '@/styles/theme';
import { useMap } from '@/hooks/useMap';

const MarkersAndMapContainer = styled.div`
  ${theme.common.flexCenter};
  width: 800px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapBox = styled.div`
  width: 100%;
  height: 90vh;
`;

interface MarkersAndMapProps {
  currLocation: string;

  binLocations: string[];
}

const MarkersAndMap: FC<MarkersAndMapProps> = ({ currLocation, binLocations }) => {
  useMap();

  return (
    <MarkersAndMapContainer>
      <MapBox id="map"></MapBox>
    </MarkersAndMapContainer>
  );
};

export default MarkersAndMap;
