import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
    StyleSheet,
} from 'react-native'
import { useIsFocused } from 'react-navigation-hooks'

export const AuthLoadingScreen = props =>{
    const [userToken, setUserToken] = useState(null)
    // const [isMounted, setIsMounted] = useState(true)

    useEffect(()=>{
        let isMounted = true
        const asyncAction = async ()=>{
            const token = await AsyncStorage.getItem('userToken')
            if(isMounted){
                setUserToken(token)
            }
        }
        if(userToken === null){
            if(isMounted){            
                asyncAction()
            }
        }
        return ()=>{
            isMounted = false
        }
    }, [])  
    useEffect(()=>{
        let isMounted = true
        if(isMounted){
            props.navigation.navigate(userToken ? 'App' : 'Auth')
        }
        return ()=>{
            isMounted = false
        }
    }, [userToken])

    return (
        <View>
            <ActivityIndicator/>
            <StatusBar barStyle='default'/>
        </View>
    )
}