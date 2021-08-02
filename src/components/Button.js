import { Button as MButton } from '@material-ui/core';
import styled from 'styled-components';

export const Button = styled(MButton)`
  color: ${({ theme }) => theme.color.secondaryDarken} !important;
`;
