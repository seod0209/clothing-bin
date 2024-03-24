import React, { FC } from 'react';
import styled from 'styled-components';

const MapBox = styled.div`
  width: 100%;
  height: 72vh;

  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

interface MarkersAndMapProps {}

const MarkersAndMap: FC<MarkersAndMapProps> = () => {
  return <MapBox id="map"></MapBox>;
};

export default MarkersAndMap;
