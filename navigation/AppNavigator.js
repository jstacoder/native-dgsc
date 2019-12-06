import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { 
  Container, 
  Header, 
  Left,
  Body,
  Right,
  Label, 
  Content, 
  Form, 
  Item, 
  Input, 
  Picker, 
  Icon,
  Button,
  Text, 
  Title,
  List,
  ListItem,
  Card,
  CardItem,
} from 'native-base';

import MainTabNavigator from './MainTabNavigator';
import { AuthLoadingScreen } from '../screens/AuthLoading'
import AuthStack from './AuthStack'


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainTabNavigator,
  }, { 
    initialRouteName: 'AuthLoading', 
    
  }));
