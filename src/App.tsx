import 'react-native-gesture-handler';

import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AnimatedBackground from './components/AnimatedBackground';
import AppProvider from './contexts';
import Navigator from './Navigator';
import { MainContainer } from './styles/Global';

// @ts-ignore
FontAwesome5.getStyledIconSet('brand').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('light').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('regular').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('solid').loadFont();

const CustomNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer theme={CustomNavigationTheme}>
      <AppProvider>
        <AnimatedBackground />

        <MainContainer>
          <Navigator />
        </MainContainer>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
