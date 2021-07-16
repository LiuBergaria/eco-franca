import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

import Themes from 'src/styles/Themes';

type ThemeOption = 'light' | 'dark';

interface IThemeContextData {
  theme: ThemeOption;
  colors: DefaultTheme;
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

const themeKey = '@EcoFranca:theme';
const defaultTheme = 'dark';

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>(defaultTheme);

  const loadTheme = useCallback(async () => {
    const loadedTheme = (await AsyncStorage.getItem(themeKey)) as ThemeOption;

    setTheme(loadedTheme || defaultTheme);
  }, []);

  useEffect(() => {
    loadTheme();
  });

  const toggleTheme = useCallback(async () => {
    setTheme((oldTheme) => {
      const newTheme = oldTheme === 'light' ? 'dark' : 'light';

      AsyncStorage.setItem(themeKey, newTheme);

      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: Themes[theme],
        toggleTheme,
      }}
    >
      <ThemeProvider theme={Themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an CustomThemeProvider');
  }

  return context;
};
