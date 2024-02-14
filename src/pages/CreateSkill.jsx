import React from "react";
import Calendar from "../components/Calendar";
import SkillNameInput from "../components/SkillNameInput";
import YoutubeAPIResult from "../components/YoutubeAPIResult";
import ToDoList from "../components/ToDoList";
import { useNavigate } from 'react-router-dom';

function CreateSkill() {
    const navigate = useNavigate();
    return(<div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">
                                Add a new skill
                            </h1>
                            <SkillNameInput />
                            <Calendar />
                            <YoutubeAPIResult />
                            <ToDoList />
                            <button onClick={()=> navigate("/CreatedSkill")}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CreateSkill;


// Create a page CreateSkill.jsx +
// CreateSkill.jsx my part will render: 
// Header with Logo +
// Title - Add a new skill +
// Skill Name - User input +
// Set dates component +
//    Skill name - input (save to Local storage)
//    Start date and Finish date (save to Local storage)
// Coursera Search +
//    user input +
//    button +
//    Coursera API 
// ToDoList component 
//    user input where a user creates a to do list manually (save to Local storage)
