import React, { useEffect, useContext, createContext, useReducer, useRef } from 'react'

const usePrevious = value =>{
  const ref = useRef()

  useEffect(()=>{
    ref.current = value
  },[value])

  return ref.current
}

export const initialState = {getConfig: ()=>{}, setConfig: ()=>{}, resetConfig: ()=>{}}

export const headerContext = createContext(initialState)

const SET_CONFIG = 'set_config'
const RESET_CONFIG = 'reset_config'



const headerContextReducer = (state, {type, config = {}}) =>{
  switch(type) {
    case SET_CONFIG:
    case RESET_CONFIG:
      return {
        ...config
      }
    default:
      return state
  }
}

export const HeaderContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(headerContextReducer, {})

  const oldConfig = usePrevious(state)

  const getConfig = () => state

  const resetConfig = () => dispatch({type: RESET_CONFIG, config: oldConfig})

  const setConfig = config => dispatch({type:  SET_CONFIG, config })

  const value = {
    getConfig,
    setConfig,
    resetConfig,
  }

  return (
    <headerContext.Provider value={value}>
      {children}
    </headerContext.Provider>
  )
}

export const useHeaderContext = () => useContext(headerContext)
