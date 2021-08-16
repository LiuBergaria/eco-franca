import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum Screens {
  Welcome = 'Welcome',
  Login = 'Login',
  ForgotPassword = 'ForgotPassword',
  CreateAccount = 'CreateAccount',
  CreateAccountSuccess = 'CreateAccountSuccess',
  Home = 'Home',
  RecordOccurrence = 'RecordOccurrence',
  MyOccurrences = 'MyOccurrences',
  ShowOccurrence = 'ShowOccurrence',
  MyAccount = 'MyAccount',
}

export type MainNavigationParamsList = {
  [Screens.Welcome]: undefined;
  [Screens.Login]: undefined;
  [Screens.ForgotPassword]: undefined;
  [Screens.CreateAccount]: undefined;
  [Screens.CreateAccountSuccess]: undefined;
  [Screens.Home]: undefined;
  [Screens.RecordOccurrence]: undefined;
  [Screens.MyOccurrences]: undefined;
  [Screens.ShowOccurrence]: { id: string };
  [Screens.MyAccount]: undefined;
};

export type MainNavigationProp = StackNavigationProp<MainNavigationParamsList>;

export type ShowOccurrenceScreenProps = RouteProp<
  MainNavigationParamsList,
  Screens.ShowOccurrence
>;
