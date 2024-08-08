'use client';
import React, { FC, useCallback, useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';
import styled from 'styled-components';

import { useMap } from '@/hooks/useMap';
import Theme from '@/styles/theme';

import SearchAddress from './SearchAddress';
import Loader from '../common/Loader';

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

const Location = styled.div`
  z-index: 100;
  position: absolute;
  top: 5%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 200px;
  height: 32px;
  text-align: center;
  border-radius: 30px;
  background: white;
  box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);

  cursor: pointer;

  @media screen and (max-width: 768px) {
    top: 8%; /* Center vertically */
  }
`;

const SearchAndMap: FC = () => {
  const [currAddress, setCurrAddress] = useState<string>('');

  const { isLoading, myLocation, handleAddressMarker, handleCurrentLocation } = useMap(currAddress);

  const handleCurrentMarker = useCallback((address: string) => {
    setCurrAddress(address);
    handleAddressMarker(address);
  }, []);

  return (
    <SearchAndMapContainer>
      <SearchAddress currAddress={currAddress} setCurrAddress={handleCurrentMarker} />
      <MarkersAndMapContainer>
        {isLoading && <Loader />}
        <MapBox id="map">
          {myLocation !== null && (
            <Location onClick={handleCurrentLocation}>
              <GrPowerReset />
              현재 위치 재검색
            </Location>
          )}
        </MapBox>
      </MarkersAndMapContainer>
    </SearchAndMapContainer>
  );
};

export default SearchAndMap;
