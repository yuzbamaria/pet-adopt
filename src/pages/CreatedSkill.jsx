import React from "react";
import { useLocation } from 'react-router-dom';
import { userDB } from "../utils/database";

const CreatedSkill = () => {
    // Get the current user's username
    const { currentUser } = userDB;
    const { state } = useLocation();
    const { currentSkill } = state;

    // Get the current user's account details
    const currentUserDetails = userDB.userAccounts[currentUser];

    // Extract relevant information
    const { skills } = currentUserDetails;
    //const lastSkill = Object.keys(skills)[Object.keys(skills).length-1];
    console.log(skills, currentSkill, currentUser);
    const { savedBooks, videos, toDoItems, startDate, finishDate } = skills[currentSkill];

    /* 
    // --- list all skills ---
    {Object.keys(skills).map((skill, index) => (
        <li key={index}>{skill}</li>
    ))}
        
    // --- list all start dates ---
    {Object.values(skills).map((skill, index) => (
        <li key={index}>{skill["startDate"]}</li>
    ))}

    // --- list all finish dates ---
    {Object.values(skills).map((skill, index) => (
        <li key={index}>{skill["finishDate"]}</li>
    ))}
     */

    return (
        <div>
            <h1>Welcome, {currentUser}!</h1>
            <div className="d-flex align-items-center flex-column">
                <h2>Your Skill:</h2>
                <ul>
                    <li>{currentSkill}</li>
                </ul>
                <h2>Start Date:</h2>
                <ul>
                    <li>{startDate}</li>
                </ul>
                <h2>Finish Date:</h2>
                <ul>
                    <li>{finishDate}</li>
                </ul>
                <h2>YouTube Videos:</h2>
                {<ul>
                    {videos &&
                        videos.map((video, index) => (
                            <li key={index}>
                                <a href={`https://www.youtube.com/watch?v=${video}`}>{`https://www.youtube.com/watch?v=${video}`}</a>
                            </li>
                        ))}
                </ul>}
                <h2>Books:</h2>
                <ul>
                    {savedBooks &&
                        savedBooks.map((book, index) => (
                            <li key={index}>
                                <h5>Book Title:</h5>
                                {book.title}
                                <h5>Author:</h5>
                                {book.author}
                                <h5>Web Link:</h5>
                                <a href={`${book.url}`}>{`Web Link`}</a>
                            </li>
                        ))}
                </ul>
                <h2>To-Do List:</h2>
                <ul>
                    {toDoItems &&
                        toDoItems.map((item, index) => (
                            <li key={index}>{item.text}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default CreatedSkill;