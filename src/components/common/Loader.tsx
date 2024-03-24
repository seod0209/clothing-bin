import React, { FC } from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  ${({ theme }) => theme.common?.flexCenter}
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: #000000
  opacity: 0.8;
  z-index: 20;
`;

const SpinLoader = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px auto;

  border: 10px solid #e3e3e3;
  border-bottom: 10px solid ${({ theme }) => theme.colors?.background?.tertiary};
  border-radius: 50%;

  animation: load 1.5s linear infinite;

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader: FC = () => (
  <LoaderContainer>
    <SpinLoader className="loading_circle" />
  </LoaderContainer>
);

export default Loader;
