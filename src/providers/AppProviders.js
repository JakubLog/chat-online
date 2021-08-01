import AuthProvider from 'hooks/useAuth';
import React from 'react';

const AppProviders = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
