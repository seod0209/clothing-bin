import React, { FC } from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${({ theme }) => theme.common?.flexCenter}
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.8;
  z-index: 20;
`;

const SpinLoader = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px auto;

  border: 10px solid #e3e3e3;
  border-bottom: 10px solid green;
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
    <SpinLoader className="loader_circle" />
  </LoaderContainer>
);

export default Loader;
