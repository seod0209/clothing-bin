'use client';

import React, { Component, ReactNode } from 'react';

import styled from 'styled-components';
import CommonButton from './common/buttons/CommonButton';

const Containter = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 102;
  transform: translate(-50%, -50%);

  background: #ffffff;
`;

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 오류 발생 시 상태를 업데이트.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 오류를 로깅하거나 처리하는 로직을 추가.
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 오류 발생 시 사용자에게 보여줄 UI를 반환.
      return (
        <Containter>
          <h2>Oops, there is an error!</h2>
          <CommonButton type="button" onClick={() => this.setState({ hasError: false })} style={{ margin: '10px auto' }}>
            Try again?
          </CommonButton>
        </Containter>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
