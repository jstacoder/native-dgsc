import React, { useState, useEffect } from 'react'
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
} from 'native-base'

import { useUserContext } from '../contexts/userContext'
import { useFocus } from '../hooks/useFocus'


export const HomeScreen = props =>{      
  useFocus(()=>({children: ''}))
  const { username } = useUserContext()
  
  return (
    <Container>     
          <Header>
            <Title>
            Welcome {username}
            </Title>
          </Header>
        <Content padder>
          <Card transparent>                            
            <CardItem>
              <Body>
                <Button dark bordered full>
                  <Text>
                    New Game
                  </Text>             
                  </Button>
              </Body>
           </CardItem>
           <CardItem>
             <Body>
             <Button dark bordered full>
                <Text>
                  History 
                </Text>
              </Button>
              </Body>
              </CardItem>
              <CardItem>
                <Body>
             <Button dark bordered full>
                <Text>
                  Options
                </Text>
              </Button>
              </Body>
              </CardItem>                           
         </Card>
        </Content>
      </Container>
  )
}

export default HomeScreen
