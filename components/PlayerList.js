import {
  Body,
  Card,
  CardItem,
  Icon,
  ListItem,
  Right,
  Text
} from 'native-base'
import React from 'react'
import { usePlayerContext } from '../contexts/playersContext'

export const PlayerList = ({displayAddMessage}) =>{

  const { players, toggleChecked } = usePlayerContext()

  return (
  <Card transparent>
    {players.length ? players.sort(
      (playera, playerb) => playera.name > playerb.name
    ).map(
      player=>
        <PlayerListItem key={player.name} clickPlayer={()=>toggleChecked(player)} player={player}/>
    ) : displayAddMessage ? <CardItem><Text>Click above to add a player</Text></CardItem> : <CardItem><Text>You need to add players</Text></CardItem>
    }
  </Card>
  )
}


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
