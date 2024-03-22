import styled from 'styled-components';

const H1 = styled.h1`
  letter-spacing: 1.5px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const H2 = styled.div`
  margin: 0 12px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export { H1, H2 };
