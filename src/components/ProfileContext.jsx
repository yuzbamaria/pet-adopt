import React, { useContext, useState } from "react";
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
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");

    function toggleLoggedIn(){
        setLoggedIn((loggedIn)=>!loggedIn);
        if(!loggedIn) {
            setUser("")
            //userDB.currentUser = "";
        }
        if(loggedIn) setUser(userDB.currentUser)
        setLocal();
        console.log("current user is:", userDB.currentUser)
    }

    return(
        <ProfileContext.Provider value={{loggedIn, user}}>
            <ProfileUpdateContext.Provider value={toggleLoggedIn}>
                {children}
            </ProfileUpdateContext.Provider>
        </ProfileContext.Provider>
    )
}