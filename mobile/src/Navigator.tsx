import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Header from './components/Header';
import { useAuth } from './contexts/auth';
import { MainNavigationParamsList, Screens } from './Routes';
import AboutTheApp from './screens/AboutTheApp';
import CreateAccount from './screens/CreateAccount';
import CreateAccountSuccess from './screens/CreateAccountSuccess';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Login from './screens/Login';
import MyAccount from './screens/MyAccount';
import MyOccurrences from './screens/MyOccurrences';
import RecordOccurrence from './screens/RecordOccurrence';
import ShowOccurrence from './screens/ShowOccurrence';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator<MainNavigationParamsList>();

const screenOptions: StackNavigationOptions = {
  transitionSpec: {
    open: {
      config: { duration: 450 },
      animation: 'timing',
    },
    close: {
      config: { duration: 450 },
      animation: 'timing',
    },
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    const item = next ?? current;
    const outputRange = next
      ? [0, -layouts.screen.width * 1.1]
      : [layouts.screen.width * 1.1, 0];

    return {
      cardStyle: {
        transform: [
          {
            translateX: item.progress.interpolate({
              inputRange: [0, 1],
              outputRange,
            }),
          },
        ],
      },
    };
  },
};

const Navigator = (): JSX.Element | null => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        ...screenOptions,
        header: (props) => <Header {...props} />,
      }}
    >
      {!isAuthenticated ? (
        <>
          <Stack.Screen name={Screens.Welcome} component={Welcome} />
          <Stack.Screen name={Screens.Login} component={Login} />
          <Stack.Screen
            name={Screens.ForgotPassword}
            component={ForgotPassword}
          />
          <Stack.Screen
            name={Screens.CreateAccount}
            component={CreateAccount}
          />
          <Stack.Screen
            name={Screens.CreateAccountSuccess}
            component={CreateAccountSuccess}
          />
        </>
      ) : (
        <>
          <Stack.Screen name={Screens.Home} component={Home} />
          <Stack.Screen
            name={Screens.RecordOccurrence}
            component={RecordOccurrence}
          />
          <Stack.Screen
            name={Screens.MyOccurrences}
            component={MyOccurrences}
          />
          <Stack.Screen
            name={Screens.ShowOccurrence}
            component={ShowOccurrence}
          />
          <Stack.Screen name={Screens.MyAccount} component={MyAccount} />
          <Stack.Screen name={Screens.AboutTheApp} component={AboutTheApp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
