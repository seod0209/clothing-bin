import React, { FC } from 'react';
import styled from 'styled-components';

import theme from '@/styles/theme';
import Loader from '../common/Loader';

const MarkersAndMapContainer = styled.div`
  ${theme.common.flexCenter};
  width: 100%;

  background-color: gray;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapBox = styled.div`
  width: 100%;
  height: 72vh;

  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

interface MarkersAndMapProps {}

const MarkersAndMap: FC<MarkersAndMapProps> = () => {
  return (
    <MarkersAndMapContainer>
      <MapBox id="map"></MapBox>
    </MarkersAndMapContainer>
  );
};

export default MarkersAndMap;
