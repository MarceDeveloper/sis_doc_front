import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  transition: border-bottom-color 0.2s;

  &:focus {
    border-bottom-color: #0077ff;
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;

