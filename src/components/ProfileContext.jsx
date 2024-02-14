import React, { useContext, useEffect, useState } from "react";
import { userDB, setLocal } from "../utils/database";

const ProfileContext = React.createContext();
const ProfileUpdateContext = React.createContext();

export function useProfileContext(){
    return useContext(ProfileContext)
}

export function useProfileUpdateContext(){
    return useContext(ProfileUpdateContext)
}

export function ProfileProvider ({ children }) {
    const [loggedIn, setLoggedIn] = useState(Boolean(userDB.currentUser));
    const [user, setUser] = useState(userDB.currentUser);

    function toggleLoggedIn(){
        setLoggedIn((loggedIn)=>!loggedIn);
        setUser(userDB.currentUser)
        setLocal("skills-tracker", userDB);
        console.log("current user is:", userDB.currentUser)
    }

    useEffect(()=>{
        if(loggedIn){
            setUser(userDB.currentUser);
        }else{
            setUser("");
        }
    }, [loggedIn])

    return(
        <ProfileContext.Provider value={{loggedIn, user}}>
            <ProfileUpdateContext.Provider value={toggleLoggedIn}>
                {children}
            </ProfileUpdateContext.Provider>
        </ProfileContext.Provider>
    )
}