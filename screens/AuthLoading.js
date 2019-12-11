import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
  Text,
    StyleSheet,
  SafeAreaView,
} from 'react-native'
import { useIsFocused } from 'react-navigation-hooks'

export const AuthLoadingScreen = props =>{
    const [userToken, setUserToken] = useState(async ()=> await AsyncStorage.getItem('userToken', (err, res)=>setUserToken(res)))
    // const [isMounted, setIsMounted] = useState(true)

    let isMounted = true

    useEffect(()=>{
        if(isMounted){
            props.navigation.navigate(userToken ? 'App' : 'Auth')
        }
        return ()=>{
            isMounted = false
        }
    }, [])

    return (
        <SafeAreaView>
            <Text>hiuta</Text>
            <StatusBar barStyle='default'/>
          <ActivityIndicator/>
        </SafeAreaView>
    )
}