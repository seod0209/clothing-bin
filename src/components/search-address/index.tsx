import React, { FC, useCallback, useContext } from 'react';
import DaumPostcodeEmbed, { DaumPostcodeEmbedProps, Address } from 'react-daum-postcode';
import { TbMapPinSearch } from 'react-icons/tb';

import { ModalUIContext } from '../common/modal/context/ModalProvider';
import Modal from '../common/modal/Modal';

import { SearchAddressContainer, SearchOpenButton, CurrentAddressText } from './style';

interface SearchAddressProps extends DaumPostcodeEmbedProps {
  searchedAddress?: string;

  setSearchedAddress: (adr: string) => void;
}

const SearchAddress: FC<SearchAddressProps> = ({ searchedAddress = undefined, setSearchedAddress, ...props }) => {
  const { openModal, setOpenModal } = useContext(ModalUIContext);

  const handleComplete = useCallback((data: Address) => {
    setSearchedAddress(data.address);
    setOpenModal(false);
  }, []);

  return (
    <SearchAddressContainer>
      <SearchOpenButton onClick={() => setOpenModal(true)}>
        주소를 입력해주세요🤓
        <TbMapPinSearch size={20} />
      </SearchOpenButton>
      <CurrentAddressText>현재 주소: {searchedAddress}</CurrentAddressText>
      {openModal && (
        <Modal>
          <DaumPostcodeEmbed style={{ width: '100%', height: '100%' }} onComplete={handleComplete} {...props} />
        </Modal>
      )}
    </SearchAddressContainer>
  );
};

export default SearchAddress;
