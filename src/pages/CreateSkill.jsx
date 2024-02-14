import React from "react";
import Calendar from "../components/Calendar";
import SkillNameInput from "../components/SkillNameInput";
import YoutubeAPIResult from "../components/YoutubeAPIResult";
import ToDoList from "../components/ToDoList";
import "./css/CreateSkill.css"
import BookAPI from "../components/BookAPI";

function CreateSkill() {
    return(<div>
        <div className="container d-flex align-items-center flex-column">
            <div className="row">
                <div className="col">
                    <div className="card skill-card skill-name">
                        <div className="card-body d-flex align-items-center flex-column">
                            <h2 className="card-title text-center">
                                Enter skill name
                            </h2>
                            <SkillNameInput />
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card skill-card">
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                Add YouTube tutorials
                            </h2>
                            <YoutubeAPIResult />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card skill-card">
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                Add books
                            </h2>
                            <BookAPI />
                        </div>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="row"> */}
                <div className="col">
                    <div className="card skill-card">
                        <div className="card-body">
                            {/* <h2 className="card-title text-center">
                                To-Do lis
                            </h2> */}
                            <ToDoList />
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
