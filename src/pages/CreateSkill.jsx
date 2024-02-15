import React from "react";
import Calendar from "../components/Calendar";
import SkillNameInput, { currentSkill } from "../components/SkillNameInput";
import YoutubeAPIResult from "../components/YoutubeAPIResult";
import ToDoList from "../components/ToDoList";
import "./css/CreateSkill.css"
import BookAPI from "../components/BookAPI";
import { useNavigate } from 'react-router-dom';

function CreateSkill() {
    const navigate = useNavigate();
    return (
        <>
        <div className="container min-vh-100 mt-5 mb-5 pt-5 text-center">
            
            <div className="row justify-content-center">
                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <div className="card-body text-center"> 
                            <h4 className="card-title">Enter skill name</h4>
                            <SkillNameInput />
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div> 

            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card skill-card">
                        <div className="card-body">
                            <h4 className="card-title">Add YouTube tutorial</h4>
                            <YoutubeAPIResult />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card skill-card">
                        <div className="card-body">
                            <h2 className="card-title">
                                Add books
                            </h2>
                            <BookAPI />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card skill-card">
                        <div className="card-body">
                            <h4 className="card-title">Add your to-do list</h4>
                            <ToDoList />
                        </div>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col text-center">
                        <button className="mr-3 ml-3 custom-btn" onClick={()=> navigate("/CreatedSkill",{
                            skill:currentSkill
                        })}
                            >Submit</button>
                    </div>
                </div>
            </div> 
        </>       
    );
}

export default CreateSkill;


