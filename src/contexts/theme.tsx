import React, { createContext, useContext } from 'react';

interface IThemeContextData {}

const ThemeContext = createContext<IThemeContextData>({});

export const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): IThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
