import { reset } from 'expo/build/AR'
import React, { useEffect } from 'react'
import { useIsFocused, useFocusEffect } from 'react-navigation-hooks'
import { useHeaderContext } from '../contexts/headerContext'

export const useFocus = (cb = ()=>{}) => {
    const { resetConfig, setConfig } = useHeaderContext()
    const isFocused = useIsFocused()

    useFocusEffect(()=>{
        if(isFocused){
            setConfig(cb())
        }
        if(!isFocused) {
            resetConfig()
        }
        return ()=>{
                resetConfig()
        }
    })
    return resetConfig
}