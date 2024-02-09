import React from "react";
import "./css/Testing.css"
import * as data from "../database.js";

function Testing() {
    return(<div>
        Testing
        <div className="box">
            <div className="usernameContainer">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
            </div>
            <div className="passwordContainer">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            <label htmlFor="pwdSubmit"></label>
            <button id="pwdSubmit" onClick={(e)=>data.addInputToDB(e)}>Submit</button>
        </div>
    </div>)
}

export default Testing