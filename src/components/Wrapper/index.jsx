import "./style.css"
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/Home"
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import CreateSkill from "../../pages/CreateSkill";
import Profile from "../../pages/Profile";
import Dashboard from "../../pages/Dashboard";

function Wrapper(props) {
    return(<main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/userprofile" element={<Profile/>} />
            <Route path="/CreateSkill" element={<CreateSkill/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </main>)
}

export default Wrapper;