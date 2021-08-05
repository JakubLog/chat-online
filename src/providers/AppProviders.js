import { GlobalStyles } from 'assets/GlobalStyles';
import { theme } from 'assets/theme';
import AuthProvider from 'hooks/useAuth';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import ErrorProvider from 'hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <Router basename="/">
      <ErrorProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
