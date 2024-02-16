import "./SavedSkill.css"
import { userDB } from "../../utils/database"
import { Link, NavLink } from "react-router-dom";
const { currentUser } = userDB; // returns current user logged in
const skills = currentUser && userDB['userAccounts'][currentUser]['skills']; // returns object with skills for current user

function SavedSkill(props){
    // console.log(currentUser, skills);
    // 

    let progressStyle ={
        display: "block",
        position: "relative",
        width: `${(100/props.tasks)*props.completed}%`,
        // height: "100%",
        // zIndex: "1",
        // backgroundColor: "rgb(255, 247, 0)",
        backgroundColor: "red",
    }

    return (
        <div className="saved-skill" style={{color:"white"}}>
            <h3 className="skill-title">
                <Link 
                    to="/CreatedSkill"
                    state = {{currentSkill:props.title}}
                    >
                    skill: {props.title}
                </Link></h3>
            <p className="skill-status">status: {props.tasks===props.completed ? "Completed!" : "In progress..."}</p>
            <span>progress bar: {props.completed}/{props.tasks}</span>
            <div className="progress">
                <div className="bar" style={progressStyle}></div>
            </div>
        </div>
    )
}

export default SavedSkill