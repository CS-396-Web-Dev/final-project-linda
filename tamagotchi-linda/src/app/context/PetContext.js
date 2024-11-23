"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const PetContext = createContext();

export const usePetContext = () => useContext(PetContext);

export const PetProvider = ({children}) => {
    const [userFiles, setUserFiles] = useState({});   // create local state containing all the users and their pets (each key for a different recipe)
    const [currentUser, setCurrentUser] = useState(0);
    const [idToName, setIdToName] = useState({});
    
    useEffect(() => {
        if (localStorage.getItem('users')){
          const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
          const storedIds = JSON.parse(localStorage.getItem('ids')) || {};
          setUserFiles(storedUsers);
          setIdToName(storedIds)
        }
      }, []);
    
    const createPet = (petName, userId,img) => {
        const temp = {...userFiles};
        temp[userId][petName] = {"img":img, "hunger":0, "happiness":0, "energy":0, "growth_stage":0}
        setUserFiles(temp);
        localStorage.setItem('users', JSON.stringify(userFiles)); // save updated info to local storage
    }

    const createUser = (username) =>{
      const newId = Object.keys(userFiles).length+1;
      const temp = {...userFiles};
      temp[newId] = {};
      setUserFiles(temp);
      localStorage.setItem('users', JSON.stringify(userFiles)); // save updated info to local storage

      const temp2 = {...idToName};
      temp2[newId] = username;
      setIdToName(temp2);
      localStorage.setItem('ids', JSON.stringify(idToName)); // save updated info to local storage
    }

    const updatePet = (petName, userId, attribute, newValue) =>{
        const temp = {...userFiles};
        temp[userId][petName][attribute] = newValue;
        setUserFiles(temp);
        localStorage.setItem('users', JSON.stringify(userFiles)); // save updated info to local storage
    }

    const deleteUser = (username) => {
      const userid = Object.keys(userFiles).find(key => idToName[key] === username);

      const temp = {...userFiles};
      delete temp[userid];

      const temp2 = {...idToName};
      delete temp2[userid];
      setUserFiles(temp);
      setIdToName(temp2);
  
      localStorage.setItem('users', JSON.stringify(userFiles));
      localStorage.setItem('ids', JSON.stringify(idToName));
    }

    return (
        <PetContext.Provider value={{userFiles, currentUser, idToName, setCurrentUser,createPet, createUser, updatePet, deleteUser}}>
          {children}
        </PetContext.Provider>
      );

}