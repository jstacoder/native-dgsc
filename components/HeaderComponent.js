import React, {useRef, useEffect} from 'react'
import { Icon, Header, Button, Text, Right, Left, Body, Title } from 'native-base'
import { useNavigation } from 'react-navigation-hooks'

import { useHeaderContext } from '../contexts/headerContext'
import TabBarIcon from '../components/TabBarIcon'

const usePrevious = value =>{
  const ref = useRef()

  useEffect(()=>{
    ref.current = value
  },[value])

  return ref.current
}

export const HeaderComponent = props =>{
    const { getConfig } = useHeaderContext()
    const navigation = useNavigation()

    const config = getConfig() || {}
    // const config = usePrevious(newConfig)


    const { title } = config || {}

    const onClick = config.icon ? config.icon.onClick : () =>{}

    const { goBackRoute } =  config

    const RightComponent = config.icon ? Icon :  Text

    const buttonProps = {
        transparent: true,
        hasText: !config.icon,
        onPress: onClick,

    }
    return (
      <Header>
            <Left>
                {!!goBackRoute &&
                <Button transparent onPress={()=> navigation.navigate(goBackRoute) }>
                    <Icon name={"arrow-back"}/>
                </Button>
                }
            </Left>
        <Body>
            <Title>                
                {!title ? `Disc Golf` : `${title}`}
            </Title>
        </Body>
  
        <Right>
            <Button {...buttonProps}>
              {config.icon ? <TabBarIcon {...config.icon} /> : <Text {...config} />}                  
          </Button>              
        </Right>
      </Header>
    )
  }