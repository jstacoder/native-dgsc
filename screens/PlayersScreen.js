import React, { useEffect, useState, useCallback, useMemo } from 'react';

import { useFocus } from '../hooks/useFocus'
import { usePlayerContext } from '../contexts/playersContext'
import { useNavigation, useIsFocused, useFocusEffect } from 'react-navigation-hooks'
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  ListItem,
  Right,
  Text
} from 'native-base'
import { ScrollView, StyleSheet } from 'react-native'
import { PlayerList } from '../components/PlayerList'

export const PlayerListItem = ({player, clickPlayer}) =>{

    const click = () =>{
      clickPlayer()
    }
    return (
      <ListItem button icon iconRight  onPress={click}>
        <Body><Text>{player.name}</Text></Body>
        <Right>
          <Icon
            button
            name={`checkbox-${player.checked ? 'marked' : 'blank'}-outline`}
            style={{
                color: player.checked ? 'green' : 'black'
            }}
            type={"MaterialCommunityIcons"}
            size={25}
          />
        </Right>
      </ListItem>
    )
}

export const AddPlayerScreen = ({navigation, ...props}) =>{
  useFocus(()=>({goBackRoute: 'listPlayers', title: 'Add Player'}))
  const focused = useIsFocused()

  const { addPlayer } = usePlayerContext()
  const [name, setName] = useState(null)
  const submit = () => {
    addPlayer({
      name,
    })
    setName('')
    navigation.goBack()
  }
  const onSubmitName = name => setName(name)

  useFocusEffect(useCallback(()=> {
    if(!focused){
      if(navigation.state.routeName==='addPlayer'){
        navigation.goBack()
      }
    }
  }, [focused]))


  return (
    <Content>
      <Card transparent>
        <CardItem>
          <Item bordered>
            <Label><Text>Player Name</Text></Label>
            <Input value={name} onChangeText={onSubmitName}/>
          </Item>
        </CardItem>
        <CardItem>
          <Body>
            <Button disabled={name === null || name === ''} onPress={submit} block>
              <Text>Submit</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </Content>
  )
}



export const ListPlayersScreen = props => {
  const { players, removePlayer, hasCheckedPlayers, toggleChecked, removePlayers } = usePlayerContext()
  const navigation = useNavigation()
  const goToAddPlayer = () => navigation.navigate('addPlayer')
  useFocus(()=>({ title: 'Players', icon: { onClick: goToAddPlayer, color: 'black', name:  'addusergroup', type: 'AntDesign'}}))


  const clickPlayer = player => toggleChecked(player)

  return (

   <Content>


     <ScrollView style={styles.container}>
         <PlayerList displayAddMessage/>
       <Card transparent>
         {hasCheckedPlayers &&
              <CardItem>
                <Body>
                  <Button onPress={removePlayers} dark bordered full>
                    <Text>
                      Remove Selected
                    </Text>
                    </Button>
                </Body>
             </CardItem>
         }
       </Card>
    </ScrollView>
   </Content>
  );
}

ListPlayersScreen.navigationOptions = {
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
