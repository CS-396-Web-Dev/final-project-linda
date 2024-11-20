"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const PetContext = createContext();

export const usePetContext = () => useContext(PetContext);

export const PetProvider = ({children}) => {
    const [userFiles, setUserFiles] = useState({});   // create local state containing all the users and their pets (each key for a different recipe)
    
    useEffect(() => {
        if (localStorage.getItem('users')){
          const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
          setUserFiles(storedUsers);
        }
      }, []);
    
    const createPet = (petName, userName,img) => {
        const temp = {...userFiles};
        temp[userName][petName] = {"img":img, "hunger":0, "happiness":0, "energy":0, "growth_stage":0}
        setUserFiles(temp);
        localStorage.setItem('users', JSON.stringify(userFiles)); // save updated info to local storage
    }

    const createUser = (userName) =>{
        const temp = {...userFiles};
        temp[userName] = {};
        setUserFiles(temp);
        localStorage.setItem('users', JSON.stringify(userFiles)); // save updated info to local storage
    }

    const updatePet = (petName, userName, attribute, newValue) =>{
        const temp = {...userFiles};
        temp[userName][petName][attribute] = newValue;
        setUserFiles(temp);
        localStorage.setItem('users', JSON.stringify(userFiles)); // save updated info to local storage
    }

    return (
        <PetContext.Provider value={{ userFiles, createPet, createUser, updatePet}}>
          {children}
        </PetContext.Provider>
      );

}