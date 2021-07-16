import React from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AnimatedBackground from './components/AnimatedBackground';
import AppProvider from './contexts';
import Emitter, { EventTypes } from './utils/Emitter';

// @ts-ignore
FontAwesome5.getStyledIconSet('brand').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('light').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('regular').loadFont();
// @ts-ignore
FontAwesome5.getStyledIconSet('solid').loadFont();

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AnimatedBackground />
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <TouchableWithoutFeedback
          onPress={() =>
            Emitter.emit(EventTypes.BackgroundAnim, { type: 'in' })
          }
        >
          <Text>Enter In</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            Emitter.emit(EventTypes.BackgroundAnim, { type: 'out' })
          }
        >
          <Text>Enter Out</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            Emitter.emit(EventTypes.BackgroundAnim, { type: 'outIn' })
          }
        >
          <Text>Enter Out In</Text>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
