'use client';

import React, { FC, lazy, Suspense, useCallback } from 'react';
import { GrPowerReset } from 'react-icons/gr';

import { useMap } from '@/hooks/useMap';
import { useGeolocation } from '@/hooks/useGeolocation';

import { MarkersAndMapContainer, MapBox, Location } from './style';

// Lazy load components
const Loader = lazy(() => import('../common/Loader'));

interface MapAndMarkersProps {
  searchedAddress: string;

  setSearchedAddress: (adr: string) => void;
}

const MapAndMarkers: FC<MapAndMarkersProps> = ({ searchedAddress, setSearchedAddress }) => {
  const { location } = useGeolocation();

  const { mapRef } = useMap(searchedAddress, location.lat, location.lng);

  const handleCurrentLocation = useCallback(() => {
    if (location) {
      mapRef.current?.setCurrentLocation(location.lat, location.lng);
      setSearchedAddress('');
    }
  }, [location, mapRef, setSearchedAddress]);

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
