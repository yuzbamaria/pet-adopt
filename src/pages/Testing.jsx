import React from "react";
import "./css/Testing.css"
// import {addInputToDB} from "../database.js";
import {useState, useEffect} from 'react';

function Testing() {
    const [pwdState, setPwdState] = useState("");
    const [userState, setUserState] = useState("");
    // useEffect(()=>{
    //     console.log("using pwd state")
    // },[pwdState])
    function testInput(){
        console.log(pwdState, userState);
    }
    return(<div>
        Testing
        <div className="box">
            <div className="usernameContainer">
                <label htmlFor="username">Username</label>
                <input
                id="username" 
                type="text" 
                onChange={(e)=>{setUserState(e.target.value)}}
                />
            </div>
            <div className="passwordContainer">
                <label htmlFor="password">Password</label>
                <input 
                id="password" 
                type="password" 
                onChange={(e)=>{setPwdState(e.target.value)}}
                />
            </div>
            <label htmlFor="pwdSubmit"></label>
            <button 
            id="pwdSubmit" 
            onClick={testInput}
            >
                Submit
            </button>
        </div>
    </div>)
}

export default Testing