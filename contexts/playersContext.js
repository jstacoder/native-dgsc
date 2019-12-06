import React, { useContext, createContext, useState, useCallback } from 'react'
import { useStorage } from '../hooks/storage'

export const PlayerContext = createContext({toggleChecked: ()=>{}, players: [], addPlayer: ()=>{}, reemovePlayers: ()=>{},removePlayer: ()=>{}})

export const PlayerContextProvider = ({children}) =>{
  const [players, setPlayers] = useStorage('players',[{name: 'jimmyJoe', checked: false}])

  const toggleChecked = useCallback(({name, checked})=>setPlayers(
    players=> players.filter(
      ({name: playerName})=> name !== playerName
    ).concat({name, checked: !checked})
    )
  , [players])

  const addPlayer = useCallback(player => {
    setPlayers([...players, player])
  }, [players])

  const removePlayer = useCallback(({name}) => setPlayers(
    players=> players.filter(
            ({name:playerName}) => name !== playerName
    )
  ), [players])

  const removePlayers = useCallback(()=>{
    setPlayers(
      players=> players.filter(player=> !player.checked)
    )
  }, [players])

  const value = {
    players,
    addPlayer,
    removePlayer,
    toggleChecked,
    removePlayers,
  }

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayerContext = () => useContext(PlayerContext)