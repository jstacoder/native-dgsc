import React from 'react'
import { createStackNavigator } from 'react-navigation'

import {
  AddPlayerScreen,
  ListPlayersScreen,
} from '../screens/PlayersScreen'


export const PlayersStack = createStackNavigator(
  {
    addPlayer: AddPlayerScreen,
    listPlayers: ListPlayersScreen,
  },  {
    initialRouteName: 'listPlayers',
    defaultNavigationOptions: {
      header: null,
  }}
)

PlayersStack.path = ''

