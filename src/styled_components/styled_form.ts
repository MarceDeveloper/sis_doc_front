import { Box, Grid } from '@mui/material';
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: "100%";
  margin: 0 auto;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const SelectField = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;


export const WrapperInput = styled(Box)`
  display: flex;
  flex-direction: column;
`
