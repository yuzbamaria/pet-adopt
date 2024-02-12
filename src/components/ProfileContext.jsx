import React, { useContext, useState } from "react";

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

    function toggleLoggedIn(){
        setLoggedIn((loggedIn)=>!loggedIn);
    }

    return(
        <ProfileContext.Provider value={loggedIn}>
            <ProfileUpdateContext.Provider value={toggleLoggedIn}>
                {children}
            </ProfileUpdateContext.Provider>
        </ProfileContext.Provider>
    )
}