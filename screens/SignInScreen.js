import React, {useState} from 'react'
import {
    Button,
    Card,
    CardItem,
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
    Text,
    Title, } from 'native-base'
import { AsyncStorage } from 'react-native'

import { useUserContext } from '../contexts/userContext'

export const SignInScreen = props =>{
    //const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const {username, setUsername} = useUserContext()

    const doSubmit = () =>{}

    const click = async () =>{
        console.log('cloickeingf')
        await AsyncStorage.setItem('userToken', '123')
        props.navigation.navigate('Main')
    }
    return (
        <Container>
          <Header/>
            <Content padder>
              <Card transparent>
                <CardItem>
                  <Item floatingLabel bordered>
                    <Label>username</Label>
                      <Input
                          value={username}
                          onChangeText={setUsername}
                          autoCapitalize='none'
                          autoCorrect={false}
                          autoFocus
                          keyboardType='email-address'
                          placeholder='Username'
                          returnKeyType='next'
                          />
                   </Item>
                 </CardItem>
                 <CardItem>
                    <Item floatingLabel>
                      <Label>Password</Label>
                      <Input
                          value={password}
                          onChangeText={setPassword}
                          secureTextEntry
                          returnKeyType='go'
                          onSubmitEditing={doSubmit}
                      />
                    </Item>
                 </CardItem>
                 <CardItem last>
                      <Body>
                          <Button title={"Sign In"} bordered block onPress={click}>
                            <Text>Sign In</Text>
                          </Button>
                      </Body>
                  </CardItem>
                  <CardItem hasText>
              <Text>{username} : {password}</Text>
                  </CardItem>
              </Card>
        </Content>
        </Container>
    )
}