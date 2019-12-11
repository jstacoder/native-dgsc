import { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";


export const useStorage = (key, initialValue, transformer = val => val) =>{
  const [storedValue, setStoredValue] = useState(initialValue);

  let isMounted = true

  useEffect(()=>{
    if(isMounted){
      setStoredValue(transformer(storedValue))
    }
    return ()=>{
       isMounted = false
    }
  }, [])


  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (value === null) return initialValue;
        return JSON.parse(value);
      })
      .then(setStoredValue)
  }, [key, initialValue]);

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    AsyncStorage.setItem(key, JSON.stringify(valueToStore));
  }

  return [storedValue, setValue];
}