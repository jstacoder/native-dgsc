import React from 'react'
import { ScrollView } from 'react-native'
import {
  Body,
  Button,
  CardItem,
  Content,
  Text
} from 'native-base'

import { PlayerList } from '../components/PlayerList'
import { usePlayerContext } from '../contexts/playersContext'
import { useFocus } from '../hooks/useFocus'

export const ChoosePlayersScreen = props => {
  useFocus(()=>({title: 'Select Players'}))
  const { hasCheckedPlayers } = usePlayerContext()

  return (
    <Content>
      <ScrollView>
          <PlayerList displayAddMessage={false} />
           {hasCheckedPlayers() &&
              <CardItem>
                <Body>
                  <Button onPress={()=> props.navigation.navigate('chooseCourse')} dark bordered full>
                    <Text>
                      Choose Course
                    </Text>
                    </Button>
                </Body>
             </CardItem>
         }
      </ScrollView>
    </Content>
  )
}