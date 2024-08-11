'use client';
import React, { FC } from 'react';
import { GrPowerReset } from 'react-icons/gr';

import { useMap } from '@/hooks/useMap';
import { MarkersAndMapContainer, MapBox, Location } from './style';

interface MapAndMarkersProps {
  currAddress?: string;
}
const MapAndMarkers: FC<MapAndMarkersProps> = ({ currAddress }) => {
  const { mapRef, handleCurrentLocation } = useMap(currAddress);

  return (
    <MarkersAndMapContainer>
      <MapBox id="map">
        {mapRef.current !== null && (
          <Location onClick={handleCurrentLocation}>
            <GrPowerReset />
            현재 위치 재검색
          </Location>
        )}
      </MapBox>
    </MarkersAndMapContainer>
  );
};

export default MapAndMarkers;
