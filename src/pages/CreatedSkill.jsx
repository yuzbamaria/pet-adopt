import React from "react";
import { useLocation } from 'react-router-dom';
import { userDB } from "../utils/database";
import "./css/CreatedSkill.css"

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
     
      // conflicting
//       created-skill-styling
        // <div>
        //     <h1>Welcome, {currentUser}!</h1>
        //     <div className="d-flex align-items-center flex-column">
        //         <h2>Your Skill:</h2>
        //         <ul>
                    
        //         </ul>
        //         <h2>Start Date:</h2>
        //         <ul>
                    
        //         </ul>
        //         <h2>Finish Date:</h2>
        //         <ul>
                    
        //         </ul>

        //         <h2>YouTube Videos:</h2>
        //         {<ul>
        //             {videos &&
        //                 videos.map((video, index) => (
        //                     <li key={index}>
        //                         <a href={`https://www.youtube.com/watch?v=${video}`}>{`https://www.youtube.com/watch?v=${video}`}</a>
        //                     </li>
        //                 ))}
        //         </ul>}
        //         <h2>Books:</h2>
        //         <ul>
        //             {savedBooks &&
        //                 savedBooks.map((book, index) => (
        //                     <li key={index}>
        //                         <h5>Book Title:</h5>
        //                         {book.title}
        //                         <h5>Author:</h5>
        //                         {book.author}
        //                         <h5>Web Link:</h5>
        //                         <a href={`${book.url}`}>{`Web Link`}</a>
        //                     </li>
        //                 ))}
        //         </ul>
        //         <h2>To-Do List:</h2>
        //         <ul>
        //             {toDoItems &&
        //                 toDoItems.map((item, index) => (
        //                     <li key={index}>{item.text}</li>
        //                 ))}
        //         </ul>
        //     </div>
        // </div>
      // conflicting


<div className="container min-vh-100 mt-5">
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body text-center">
        <div className="d-flex justify-content-center align-items-center mb-3" >
        {/* Placeholder image */}
            <img src="/assets/jedi.png" alt="jedi" className="img-fluid" style={{  height: '150px'  }} />
        </div>
          <h3 className="card-title custom-title2">Welcome, Master {currentUser}</h3>
          <p className="card-text custom-headline">Your training awaits, young Jedi. Refine your <strong>{ currentSkill }</strong> </p>
          <p className="card-text custom-p">Your commitment to work on skill:</p>
          <p className="card-text"> <strong>Start date:</strong> { startDate } </p>
          <p className="card-text"> <strong>Finish date:</strong> { finishDate } </p>
        </div>
      </div>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-header text-center">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img src="/assets/youtube.png" alt="youtube-icon" className="img-fluid" style={{ height: '50px' }} />
              </div>
                <h5 className="card-title d-inline custom-title2">Youtube videos</h5>
            </div>
            <ul className="m-2">
                     {videos &&

// conflicting
//         <div>
//             <h1>Welcome, {currentUser}!</h1>
//             <div className="d-flex align-items-center flex-column">
//                 <h2>Your Skill:</h2>
//                 <ul>
//                     <li>{currentSkill}</li>
//                 </ul>
//                 <h2>Start Date:</h2>
//                 <ul>
//                     <li>{startDate}</li>
//                 </ul>
//                 <h2>Finish Date:</h2>
//                 <ul>
//                     <li>{finishDate}</li>
//                 </ul>
//                 <h2>YouTube Videos:</h2>
//                 {<ul>
//                     {videos &&
// conflicting
                        videos.map((video, index) => (
                            <li className="checkbox-item2" key={index}>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id={`video${index}`} />
                                <label className="form-check-label" htmlFor={`video${index}`}>    
                                    <a href={`https://www.youtube.com/watch?v=${video}`}>{`https://www.youtube.com/watch?v=${video}`}</a>
                                </label>
                                </div>
                            </li>
                        ))}
            </ul>
            </div>
    </div>
        <div className="col-md-12 mb-4">
            <div className="card">
                <div className="card-header text-center">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src="/assets/books.png" alt="youtube-icon" className="img-fluid" style={{ height: '50px' }} />
                </div>
                    <h5 className="card-title d-inline custom-title2">Books</h5>
                </div>
                <ul className="m-2">
                    {savedBooks &&
                        savedBooks.map((book, index) => (
                            <li className="checkbox-item2" key={index}>
                                <input className="form-check-input" type="checkbox" value="" id={`book${index}`} />
                                <label className="form-check-label" htmlFor={`book${index}`}>   
                                 <p> <strong> Book Title:</strong> {book.title}</p>
                                 <p> <strong> Author: </strong> {book.author}</p>
                                 <p> <strong> Web Link: </strong> <a href={`${book.url}`}>{`Web Link`}</a></p>
                                 </label>
                             </li>
                         ))}
                </ul>
            </div>
        </div>
        <div className="col-md-12 mb-4">
        <div className="card">
                <div className="card-header text-center">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src="/assets/to-do-list.png" alt="youtube-icon" className="img-fluid" style={{ height: '50px' }} />
                </div>
                    <h5 className="card-title d-inline custom-title2">To-do list</h5>
                </div>
                <ul className="m-2">
                     {toDoItems &&
                         toDoItems.map((item, index) => (
                             <li className="checkbox-item2" key={index}>
                                <div className="form-check">
                             <input className="form-check-input" type="checkbox" value="" id={`item${index}`} />
                             <label className="form-check-label" htmlFor={`item${index}`}> 
                             {item.text}
                             </label>
                             </div>
                             </li>
                         ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default CreatedSkill;