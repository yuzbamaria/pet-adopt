import React from "react";
import CourseraSearch from "../components/CourseraSearch";
// import SearchInput from "../components/SearchInput";
import Calendar from "../components/Calendar";
import SkillNameInput from "../components/SkillNameInput";

function CreateSkill() {
    return(<div>
        <h1>Add a new skill</h1>
        <SkillNameInput />
        <CourseraSearch />
        <Calendar />
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
