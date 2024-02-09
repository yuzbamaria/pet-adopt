import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/Home"
import SignIn from "../../pages/SignIn";
import CreateSkill from "../../pages/CreateSkill";

function Wrapper(props) {
    return(<main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/CreateSkill" element={<CreateSkill/>} />
        </Routes>
    </main>)
}

export default Wrapper;