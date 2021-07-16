import React from 'react';

import { AuthProvider } from './auth';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
