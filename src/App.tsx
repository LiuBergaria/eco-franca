import React from 'react';
import { View } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

FontAwesome5.getStyledIconSet('brand').loadFont();
FontAwesome5.getStyledIconSet('light').loadFont();
FontAwesome5.getStyledIconSet('regular').loadFont();
FontAwesome5.getStyledIconSet('solid').loadFont();

const App = (): JSX.Element => {
  return <View />;
};

export default App;
