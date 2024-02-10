import React from "react";
import "./css/Testing.css"
import {addInputToDB} from "../database.js";
import {useState, useEffect} from 'react';

function Testing() {
    const [pwd, setPwd] = useState("");
    const [user, setUser] = useState("");
    // useEffect(()=>{
    // },[pwd])
    return(<div>
        Testing
        <div className="box">
            <div className="usernameContainer">
                <label htmlFor="username">Username</label>
                <input
                id="username" 
                type="text" 
                onChange={(e)=>{setUser(e.target.value)}}
                />
            </div>
            <div className="passwordContainer">
                <label htmlFor="password">Password</label>
                <input 
                id="password" 
                type="password" 
                onChange={(e)=>{setPwd(e.target.value)}}
                />
            </div>
            <label htmlFor="pwdSubmit"></label>
            <button 
            id="pwdSubmit" 
            onClick={()=>{
                console.log("onClick is being called")
                addInputToDB([user, pwd])
            }}
            >
                Submit
            </button>
        </div>
    </div>)
}

export default Testing