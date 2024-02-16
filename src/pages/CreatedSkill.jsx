import React from "react";
import { useLocation } from "react-router-dom";
import { userDB, setLocal } from "../utils/database";
import "./css/CreatedSkill.css";

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
  const { savedBooks, videos, toDoItems, startDate, finishDate } =
    skills[currentSkill||userDB.selectedSkill];

  function completedBook(index, checked) {
    savedBooks[index].completed = checked;
    if(checked===true){
        userDB.userAccounts[currentUser].skills[currentSkill||userDB.selectedSkill].progress++;
    } else {
        userDB.userAccounts[currentUser].skills[currentSkill||userDB.selectedSkill].progress--;
    }
    setLocal("skills-tracker", userDB);
  }
  function completedVideo(index, checked) {
    videos[index].completed = checked;
    if(checked===true){
        userDB.userAccounts[currentUser].skills[currentSkill||userDB.selectedSkill].progress++;
    } else {
        userDB.userAccounts[currentUser].skills[currentSkill||userDB.selectedSkill].progress--;
    }
    setLocal("skills-tracker", userDB);
  }
  function completedToDo(index, checked) {
    toDoItems[index].completed = checked;
    if(checked===true){
        userDB.userAccounts[currentUser].skills[currentSkill||userDB.selectedSkill].progress++;
    } else {
        userDB.userAccounts[currentUser].skills[currentSkill||userDB.selectedSkill].progress--;
    }
    setLocal("skills-tracker", userDB);
  }

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
    <div className="container min-vh-100 mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="d-flex justify-content-center align-items-center mb-3">
                {/* Placeholder image */}
                <img
                  src="/assets/jedi.png"
                  alt="jedi"
                  className="img-fluid"
                  style={{ height: "150px" }}
                />
              </div>
              <h3 className="card-title custom-title2">
                Welcome, Master {currentUser}
              </h3>
              <p className="card-text custom-headline">
                Your training awaits, young Jedi. Refine your{" "}
                <strong>{currentSkill||userDB.selectedSkill}</strong>{" "}
              </p>
              <p className="card-text custom-p">
                Your commitment to work on skill:
              </p>
              <p className="card-text">
                {" "}
                <strong>Start date:</strong> {startDate}{" "}
              </p>
              <p className="card-text">
                {" "}
                <strong>Finish date:</strong> {finishDate}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card">
                <div className="card-header text-center">
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img
                      src="/assets/youtube.png"
                      alt="youtube-icon"
                      className="img-fluid"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <h5 className="card-title d-inline custom-title2">
                    Youtube videos
                  </h5>
                </div>
                <ul className="m-2">
                  {videos &&
                    videos.map((video, index) => (
                      <li className="checkbox-item2" key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`video${index}`}
                            onChange={(e) => {
                                completedVideo(index, e.target.checked);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`video${index}`}
                          >
                            <a
                              href={`https://www.youtube.com/watch?v=${video.video}`}
                            >{`https://www.youtube.com/watch?v=${video.video}`}</a>
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
                    <img
                      src="/assets/books.png"
                      alt="youtube-icon"
                      className="img-fluid"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <h5 className="card-title d-inline custom-title2">Books</h5>
                </div>
                <ul className="m-2">
                  {savedBooks &&
                    savedBooks.map((book, index) => (
                      <li className="checkbox-item2" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={`book${index}`}
                          onChange={(e) => {
                            completedBook(index, e.target.checked);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`book${index}`}
                        >
                          <p>
                            {" "}
                            <strong> Book Title:</strong> {book.title}
                          </p>
                          <p>
                            {" "}
                            <strong> Author: </strong> {book.author}
                          </p>
                          <p>
                            {" "}
                            <strong> Web Link: </strong>{" "}
                            <a href={`${book.url}`}>{`Web Link`}</a>
                          </p>
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
                    <img
                      src="/assets/to-do-list.png"
                      alt="youtube-icon"
                      className="img-fluid"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <h5 className="card-title d-inline custom-title2">
                    To-do list
                  </h5>
                </div>
                <ul className="m-2">
                  {toDoItems &&
                    toDoItems.map((item, index) => (
                      <li className="checkbox-item2" key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`item${index}`}
                            onChange={(e) => {
                                completedToDo(index, e.target.checked);
                              }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`item${index}`}
                          >
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
