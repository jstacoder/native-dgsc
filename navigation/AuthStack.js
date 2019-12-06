import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header, Right, Left, Body, Title } from 'native-base'

import { SignInScreen } from '../screens/SignInScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    headerMode: 'float',
    // defaultNavigationOptions: {
    //   headerTitle: HeaderComponent, 
    // }
  },
});

const SignInStack = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  config
);

SignInStack.path = ''

const AuthStack = createStackNavigator({
  SignInStack,
})

AuthStack.path = ''

export default AuthStack
