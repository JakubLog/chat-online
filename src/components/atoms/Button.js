import { Button as MButton } from '@material-ui/core';
import styled from 'styled-components';

export const Button = styled(MButton)`
  color: ${({ isDark, theme }) => (isDark ? theme.color.secondaryDarken : theme.color.primary)} !important;
`;
