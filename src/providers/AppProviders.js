import { GlobalStyles } from 'assets/GlobalStyles';
import { theme } from 'assets/theme';
import AuthProvider from 'hooks/useAuth';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AppProviders;
