import React, { createContext, useContext } from 'react';

interface IAuthContextData {}

const AuthContext = createContext<IAuthContextData>({});

export const AuthProvider: React.FC = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
