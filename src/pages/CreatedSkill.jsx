import React from "react";
import { userDB } from "../utils/database";

const SkillPage = () => {
    // Get the current user's username
    const currentUser = userDB.currentUser;
 
    // Get the current user's account details
    const currentUserDetails = userDB.userAccounts[currentUser];

    // Extract relevant information
    const { skills } = currentUserDetails;

    const { /* startDate, finishDate, */ videos, toDoItems } = skills[currentUser];

    console.log(skills)

    return (
        <div>
            <h1>Welcome, {currentUser}!</h1>
            <h2>Your Skills:</h2>
            <ul>
                {Object.keys(skills).map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <h2>Start Dates:</h2>
            <ul>
                {Object.keys(skills).map((date, index) => (
                    <li key={index}>{date.startDate}</li>
                ))}
            </ul>
            <h2>Finish Dates:</h2>
            <ul>
                {Object.keys(skills).map((date, index) => (
                    <li key={index}>{date.finishDate}</li>
                ))}
            </ul>
            <h2>YouTube Videos:</h2>
            <ul>
            {videos.map((video, index) => (
    <li key={index}>
        {/* Add this line for debugging */}
        {console.log("Video:", video)}
        <a 
            href={`https://www.youtube.com/watch?v=${video.link}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            title={video.title} 
        >
            {video.title}
        </a>
    </li>
))}
            </ul>
            <h2>To-Do List:</h2>
            <ul>
            {toDoItems.map((item, index) => (
    <li key={index}>{item.text}</li> 
))}
            </ul>
        </div>
    );
};

export default SkillPage;