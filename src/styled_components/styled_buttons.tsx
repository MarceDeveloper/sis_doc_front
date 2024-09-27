import styled from 'styled-components';

export const PrimaryButton = styled.button`
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #125699;
  }
`;

export const SecondaryButton = styled.button`
  padding: 10px 20px;
  background-color: #f50057;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c51162;
  }
`;

export const DangerButton = styled.button`
  padding: 10px 20px;
  background-color: #ff3d00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dd2c00;
  }
`;

export const FabButton = styled.button`
  z-index: 2;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(25, 118, 210, 0.4);
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #125699;
  }
`;


export const IconWrapperButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;