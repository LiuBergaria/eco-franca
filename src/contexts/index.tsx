import React from 'react';

import { AuthProvider } from './auth';
import { HeaderProvider } from './header';
import { ModalProvider } from './modal';
import { CustomThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <ModalProvider>
        <HeaderProvider>
          <AuthProvider>{children}</AuthProvider>
        </HeaderProvider>
      </ModalProvider>
    </CustomThemeProvider>
  );
};

export default AppProvider;
