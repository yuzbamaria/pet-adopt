import React from "react";
import { userDB } from "../utils/database";

const SkillPage = () => {
    // Get the current user's username
    const { currentUser } = userDB;

    // Get the current user's account details
    const currentUserDetails = userDB.userAccounts[currentUser];

    // Extract relevant information
    const { skills } = currentUserDetails;

    const { books, videos, toDoItems } = skills[currentUser];

    // let userSkills = Object.values(skills[currentUser])
    // let startDate = Object.values(skills[currentUser])[0]
    let finishDate = Object.values(skills[currentUser])[1]
    // let youtubeVideos = Object.values(skills[currentUser])[3]
    // console.log(userSkills)
    // console.log(youtubeVideos)

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
                {Object.values(skills).map((skill, index) => (
                    <li key={index}>{skill["startDate"]}</li>
                ))}
            </ul>
            <h2>Finish Dates:</h2>
            <ul>
                {Object.values(skills).map((skill, index) => (
                    <li key={index}>{skill["finishDate"]}</li>
                ))}
            </ul>

            <h2>YouTube Videos:</h2>
            {<ul>
                {videos.map((video, index) => (
                    <li key={index}>
                        <a href={`https://www.youtube.com/watch?v=${video}`}>{`https://www.youtube.com/watch?v=${video}`}</a>
                    </li>
                ))}
            </ul>}
            <h2>Books:</h2>
            <ul>
                {books.map((item, index) => (
                    <li key={index}>{item.title}</li>
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