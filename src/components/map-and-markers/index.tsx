'use client';
import React, { FC, lazy, Suspense } from 'react';
import { GrPowerReset } from 'react-icons/gr';

import { useMap } from '@/hooks/useMap';
import { MarkersAndMapContainer, MapBox, Location } from './style';

// Lazy load components
const Loader = lazy(() => import('../common/Loader'));

interface MapAndMarkersProps {
  currAddress?: string;
}

const MapAndMarkers: FC<MapAndMarkersProps> = ({ currAddress }) => {
  const { mapRef, handleCurrentLocation } = useMap(currAddress);

  return (
    <Suspense fallback={<Loader />}>
      <MarkersAndMapContainer>
        {mapRef ? (
          <MapBox id="map">
            {mapRef.current !== null && (
              <Location onClick={handleCurrentLocation}>
                <GrPowerReset />
                현재 위치 재검색
              </Location>
            )}
          </MapBox>
        ) : (
          <Loader />
        )}
      </MarkersAndMapContainer>
    </Suspense>
  );
};

export default MapAndMarkers;
