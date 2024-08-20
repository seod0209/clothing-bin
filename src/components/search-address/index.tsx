import React, { FC, useCallback, useState } from 'react';
import DaumPostcodeEmbed, { DaumPostcodeEmbedProps, Address } from 'react-daum-postcode';
import { TbMapPinSearch } from 'react-icons/tb';

import CommonModal from '../common/modals/Common';

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
      <CommonModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PostCodeLayout>
          <DaumPostcodeEmbed style={{ width: '100%', height: '100%' }} onComplete={handleComplete} {...props} />
        </PostCodeLayout>
      </CommonModal>
      <SearchOpenButton onClick={() => setIsOpen(true)}>
        주소를 입력해주세요🤓
        <TbMapPinSearch size={20} />
      </SearchOpenButton>
      <CurrentAddressText>현재 주소: {searchedAddress}</CurrentAddressText>
    </SearchAddressContainer>
  );
};

export default SearchAddress;
