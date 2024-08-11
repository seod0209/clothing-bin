'use client';
import React, { FC } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
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

const SpinLoading = styled.div`
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

const Loading: FC = () => (
  <LoadingContainer>
    <SpinLoading className="loading_circle" />
  </LoadingContainer>
);

export default Loading;
