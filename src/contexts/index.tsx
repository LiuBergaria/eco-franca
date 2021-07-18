import React from 'react';

import { AuthProvider } from './auth';
import { HeaderProvider } from './header';
import { CustomThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <HeaderProvider>
        <AuthProvider>{children}</AuthProvider>
      </HeaderProvider>
    </CustomThemeProvider>
  );
};

export default AppProvider;
