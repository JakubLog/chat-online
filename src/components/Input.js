import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Input = styled(TextField)`
  label {
    color: ${({ theme }) => theme.color.primary} !important;
    &.Mui-focused {
      color: ${({ theme }) => theme.color.primaryDarken} !important;
    }
  }
  div {
    &::before {
      border-bottom: 1px solid ${({ theme }) => theme.color.secondaryDarken} !important;
    }
    &::after {
      border-bottom: 2px solid ${({ theme }) => theme.color.primary} !important;
    }
    &:hover {
      &::before {
        border-bottom: 2px solid ${({ theme }) => theme.color.secondaryDarken} !important;
      }
    }
  }
  input {
    color: white;
  }
`;
