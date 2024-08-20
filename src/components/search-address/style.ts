import styled from 'styled-components';

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

const PostCodeLayout = styled.div`
  padding: 8px;
  height: 420px;
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export { SearchAddressContainer, SearchOpenButton, CurrentAddressText, PostCodeLayout };
