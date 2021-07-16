import React from 'react';

import { AuthProvider } from './auth';
import { CustomThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </CustomThemeProvider>
  );
};

export default AppProvider;
