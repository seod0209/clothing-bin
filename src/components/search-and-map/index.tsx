'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useMap } from '@/hooks/useMap';
import Theme from '@/styles/theme';

import SearchAddress from './SearchAddress';

import Loader from '../common/Loader';
import useMarkers from './use-markers';

const SearchAndMapContainer = styled.div`
  ${Theme.common.flexCenterColumn};
  gap: 16px;
  padding: 20px 16px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8px 0;
  }
`;

const MarkersAndMapContainer = styled.div`
  position: relative;
  ${Theme.common.flexCenter};
  width: 100%;

  background-color: #ebedeb;

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

const SearchAndMap: FC = () => {
  const { isLoading, handleAddressMarker } = useMap();
  const [currAddress, setCurrAddress] = useState<string>('');

  const handleCurrentMarker = useCallback((address: string) => {
    setCurrAddress(address);
    handleAddressMarker(address);
  }, []);

  return (
    <SearchAndMapContainer>
      <SearchAddress currAddress={currAddress} setCurrAddress={handleCurrentMarker} />
      <MarkersAndMapContainer>
        {isLoading && <Loader />}
        <MapBox id="map"></MapBox>
      </MarkersAndMapContainer>
    </SearchAndMapContainer>
  );
};

export default SearchAndMap;
