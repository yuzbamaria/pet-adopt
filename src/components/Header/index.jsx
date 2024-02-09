import React from "react";
import "./style.css"
import Login from "../Login"
import SignIn from "../../pages/SignIn";
import Hero from "../Hero";

function Header(props) {
    return(<header>
        <Hero />
        <SignIn />
    </header>)
}

export default Header