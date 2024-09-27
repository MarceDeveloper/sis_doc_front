import React from 'react';
import styled from 'styled-components';

interface LoadingProps {
  isLoading: boolean;
}

const Overlay = styled.div<LoadingProps>`
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #fff;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingOverlay: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Overlay isLoading={isLoading}>
      <Spinner />
    </Overlay>
  );
};

