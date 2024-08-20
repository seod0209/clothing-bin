'use client';

import React, { FC, lazy, useCallback, useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';

import { useMap } from '@/hooks/useMap';
import { useGeolocation } from '@/hooks/useGeolocation';

import { MarkersAndMapContainer, MapBox, Location } from './style';

// Lazy load components
const Loader = lazy(() => import('@/components/common/Loader'));

interface MapAndMarkersProps {
  searchedAddress: string;

  setSearchedAddress: (adr: string) => void;
}

const MapAndMarkers: FC<MapAndMarkersProps> = ({ searchedAddress, setSearchedAddress }) => {
  const { location, address } = useGeolocation();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const { mapRef } = useMap(searchedAddress, () => setIsMapLoaded(true));

  const handleCurrentLocation = useCallback(() => {
    if (location) {
      mapRef.current?.setCurrentLocation(location.lat, location.lng);

      setSearchedAddress(address);
    }
  }, [location, mapRef, setSearchedAddress]);

  return (
    <MarkersAndMapContainer>
      {!isMapLoaded && <Loader />}
      <MapBox id="map">
        {mapRef.current !== null && (
          <Location onClick={handleCurrentLocation}>
            <GrPowerReset />
            현재 위치 검색
          </Location>
        )}
      </MapBox>
    </MarkersAndMapContainer>
  );
};

export default MapAndMarkers;
