import React from 'react'
import {useState, useEffect} from 'react'
import SignIn from "./pages/SignIn";

const userName = "Toby-EDX"
const password = "T0by2024#"
const email = "toby@edx.com"
// let skillPaths = {};
// let activity = {};
// const user = {};

const activity = {
    youTubeTutorials: [],
    userNotes: [],
}

const skillPaths = {
    // have savedTopic passed in like: skillPaths["savedTopic"]
    // activity will be defined then added like shown below
    savedTopic: activity,
}

const user = {
    userName,
    password,
    email,
    skillPaths,
}

const database = {
    user
}



console.log(database)

function addInputToDB(data){
    //setTimeout(()=>{
        console.log(...data);
    //}, 500)
}

export {addInputToDB}