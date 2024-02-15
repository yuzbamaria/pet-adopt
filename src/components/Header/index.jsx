import React from "react";
import "./style.css"
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useProfileContext, useProfileUpdateContext  } from "../ProfileContext";
import { logOut } from "../../utils/database";

function Header() {
    const { loggedIn } = useProfileContext();
    const toggleLogin = useProfileUpdateContext();
    function handleLogOut (){
        toggleLogin();
        logOut();
    }

    return (
    <>
        <nav className="navbar navbar-expand-md bg-body-tertiary custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand custom-logo" to="/">
                    FORCE MASTERY TRACKER
                </Link>
                
                <div className="nav-options custom-nav-options">
                    {loggedIn
                    ?
                    <>
                        <NavLink 
                        to="/CreateSkill" 
                        end
                        className={({ isActive }) =>
                            isActive ? 'nav-link active create-skill' : 'nav-link create-skill'
                        }
                        >
                        Alter Your Force
                        </NavLink> 
                        <Link className="logout" to="/" onClick={handleLogOut}>
                            Withdraw from the Force
                        </Link>
                        <Link className="profile" to="/userprofile">
                            <Avatar className="avatar" alt="Profile avatar" src="../../assets/profile-pic.png" />
                        </Link>
                    </>
                    :
                    <>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarTogglerDemo02" 
                            aria-controls="navbarTogglerDemo02" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-nav collapse navbar-collapse " id="navbarTogglerDemo02">
                            <ul className="ms-auto mb-2 mb-lg-0">

                                {/* <li className="nav-item">
                                    <NavLink 
                                    to="/CreateSkill" 
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                    >
                                    Add a skill
                                    </NavLink> 
                                </li> */}

                                <li className="nav-item">
                                    <NavLink 
                                    to="/SignIn" 
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                    >
                                    SIGN IN
                                    </NavLink> 
                                </li>
                            </ul>
                        </div>
                    </>}
                </div>
            </div>
        </nav>
    </>)
}

export default Header;

