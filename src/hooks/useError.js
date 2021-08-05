import React, { useState, useContext } from 'react';

const ErrorContext = React.createContext({});

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 8000);
  };

  const value = { error, dispatchError };

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};

export default ErrorProvider;

export const useError = () => {
  const error = useContext(ErrorContext);
  if (!error) console.error("Global error service isn't working! Contact with support!");
  return error;
};
