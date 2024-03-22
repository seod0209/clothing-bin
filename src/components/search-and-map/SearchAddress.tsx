import React, { FC, useCallback, useState } from 'react';
import DaumPostcodeEmbed, { DaumPostcodeEmbedProps, Address } from 'react-daum-postcode';
import styled from 'styled-components';

import { TbMapPinSearch } from 'react-icons/tb';

import Theme from '@/styles/theme';

const SearchAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const SearchOpenButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  height: 40px;

  border: 1px solid green;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors?.text?.secondary};
  background: ${({ theme }) => theme.colors?.background?.primary};

  font-size: 16px;
  line-height: 20px;
`;

const CurrentAddressText = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

interface SearchAddressProps extends DaumPostcodeEmbedProps {
  setCurrAddress: (adr: string) => void;
}

const SearchAddress: FC<SearchAddressProps> = ({ setCurrAddress, ...props }) => {
  const [address, setAddress] = useState<string>('');

  const handleComplete = useCallback((data: Address) => {
    setAddress(data.address);

    setCurrAddress(data.address);
  }, []);

  return (
    <SearchAddressContainer>
      <SearchOpenButton>
        주소 찾기
        <TbMapPinSearch size={20} />
      </SearchOpenButton>
      <CurrentAddressText>현재 주소: {address}</CurrentAddressText>
      <DaumPostcodeEmbed style={{ width: 300 }} onComplete={handleComplete} {...props} autoClose={false} />
    </SearchAddressContainer>
  );
};

export default SearchAddress;
