import React, {useState, useContext, createContext} from 'react'

export const UserContext = createContext({username: null, setUsername: ()=>{}})

export const UserContextProvider = ({children}) =>{
    const [username, setUsername] = useState(null)

    const value = {username,  setUsername} 

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)