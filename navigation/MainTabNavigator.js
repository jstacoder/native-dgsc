import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import { CoursesStack as Courses } from './CoursesStack';
import { PlayersStack as BasePlayersStack } from './PlayersStack'
import { HeaderComponent } from '../components/HeaderComponent'



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    headerMode: 'screen',    
    defaultNavigationOptions: {
      header: props => <HeaderComponent {...props}/>,       
    }
  },
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {    
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
      type={'FontAwesome'}
    />
  ),
};

HomeStack.path = '';

const CoursesStack = createStackNavigator(
  {
    Courses,
  },
  config
);

CoursesStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon focused={focused} color={tintColor} name={'golf-course'} type='MaterialIcons' />
  ),
};

CoursesStack.path = '';

const PlayersStack = createStackNavigator(
  {
    Players: BasePlayersStack,
  },
  config
);

PlayersStack.navigationOptions = {  
  tabBarLabel: 'Players',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'account-group'} type={'MaterialCommunityIcons'} />
  ),  
};

PlayersStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  PlayersStack,
}, 
);

tabNavigator.path = '';

export default tabNavigator;
