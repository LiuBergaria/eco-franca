import 'react-native-gesture-handler';

import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AnimatedBackground from './components/AnimatedBackground';
import AppProvider from './contexts';
import Navigator from './Navigator';

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

        <Navigator />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
