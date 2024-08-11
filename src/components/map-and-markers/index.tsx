'use client';
import React, { FC, useCallback, useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';

import { useMap } from '@/hooks/useMap';
import { MarkersAndMapContainer, MapBox, Location } from './style';

const SearchAndMap: FC = () => {
  const [currAddress, setCurrAddress] = useState<string>('');

  const { isLoading, myLocation, handleAddressMarker, handleCurrentLocation } = useMap(currAddress);

  const handleCurrentMarker = useCallback((address: string) => {
    setCurrAddress(address);
    handleAddressMarker(address);
  }, []);

  return (
    <MarkersAndMapContainer>
      <MapBox id="map">
        {myLocation !== null && (
          <Location onClick={handleCurrentLocation}>
            <GrPowerReset />
            현재 위치 재검색
          </Location>
        )}
      </MapBox>
    </MarkersAndMapContainer>
  );
};

export default SearchAndMap;
