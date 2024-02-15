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

    console.log(books[0].title)

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
                {books.map((book, index) => (
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
                {toDoItems.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillPage;