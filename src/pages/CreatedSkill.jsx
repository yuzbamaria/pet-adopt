
import React, { useEffect, useState } from "react";
import { getLocal, currentUser } from "../utils/database";

const CreatedSkill = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Retrieve user data from local storage based on the currentUser
        const userData = getLocal("skills-tracker")[currentUser];
        setUserData(userData);
    }, []);

    return (
        <div>
            <h2>User: {currentUser}</h2>
            {userData && (
                <div>
                    <h3>Skills:</h3>
                    <ul>
                        {userData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <h3>Start Dates:</h3>
                    <ul>
                        {userData.startDate.map((date, index) => (
                            <li key={index}>{date}</li>
                        ))}
                    </ul>
                    <h3>Finish Dates:</h3>
                    <ul>
                        {userData.finishDate.map((date, index) => (
                            <li key={index}>{date}</li>
                        ))}
                    </ul>
                    <h3>YouTube Videos:</h3>
                    <ul>
                        {userData.videos.map((video, index) => (
                            <li key={index}>{video}</li>
                        ))}
                    </ul>
                    <h3>To Do List:</h3>
                    <ul>
                        {userData.toDoItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CreatedSkill;
