import React, { FC, useState } from 'react';
import styled from 'styled-components';

import theme from '@/styles/theme';
import SearchAddress from './search-address';

const SearchAndMapContainer = styled.div`
  ${theme.common.flexCenter};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchAndMap: FC = () => {
  const [currAddress, setCurrAddress] = useState<string>('');
  console.log(currAddress);
  return (
    <SearchAndMapContainer>
      <SearchAddress setCurrAddress={setCurrAddress} />
    </SearchAndMapContainer>
  );
};

export default SearchAndMap;
