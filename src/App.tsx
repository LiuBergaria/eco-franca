import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AnimatedBackground from './components/AnimatedBackground';
import AppProvider from './contexts';
import Routes from './Routes';
import Emitter, { EventTypes } from './utils/Emitter';

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
  useEffect(() => {
    Emitter.emit(EventTypes.BackgroundAnim, { type: 'in' });
  }, []);

  return (
    <NavigationContainer theme={CustomNavigationTheme}>
      <AppProvider>
        <AnimatedBackground />
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
