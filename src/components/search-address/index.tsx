import React, { FC, useCallback, useState } from 'react';
import DaumPostcodeEmbed, { DaumPostcodeEmbedProps, Address } from 'react-daum-postcode';
import { TbMapPinSearch } from 'react-icons/tb';

import ModalLayout from '../common/modals/Layout';

import { SearchAddressContainer, SearchOpenButton, CurrentAddressText, PostCodeLayout } from './style';

interface SearchAddressProps extends DaumPostcodeEmbedProps {
  searchedAddress?: string;

  setSearchedAddress: (adr: string) => void;
}

const SearchAddress: FC<SearchAddressProps> = ({ searchedAddress = undefined, setSearchedAddress, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleComplete = useCallback((data: Address) => {
    setSearchedAddress(data.address);
    setIsOpen(false);
  }, []);

  return (
    <SearchAddressContainer>
      <ModalLayout isOpen={isOpen} title={'주소 검색'} onClose={() => setIsOpen(false)}>
        <PostCodeLayout>
          <DaumPostcodeEmbed style={{ width: '100%', height: '100%' }} onComplete={handleComplete} {...props} />
        </PostCodeLayout>
      </ModalLayout>
      <SearchOpenButton onClick={() => setIsOpen(true)}>
        주소를 입력해주세요🤓
        <TbMapPinSearch size={20} />
      </SearchOpenButton>
      <CurrentAddressText>현재 주소: {searchedAddress}</CurrentAddressText>
    </SearchAddressContainer>
  );
};

export default SearchAddress;
