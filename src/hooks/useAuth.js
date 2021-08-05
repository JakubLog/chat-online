import firebase, { auth } from '../firebase';
import React, { useEffect, useState, useContext } from 'react';

const AuthContext = React.createContext({});
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setLoadingState] = useState(true);

  const signIn = (login, password) => auth.signInWithEmailAndPassword(login, password);
  const signOut = () => auth.signOut();
  const resetPassword = (email) => auth.sendPasswordResetEmail(email);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  useEffect(() => {
    setLoadingState(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoadingState(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    signOut
  };
  return <AuthContext.Provider value={value}>{isLoading ? <p>Loading...</p> : children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) return console.error('Ooops! Something went wrong!');
  return auth;
};

export default AuthProvider;
