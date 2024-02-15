import "./SavedSkill.css"
import { userDB } from "../../utils/database"
const { currentUser } = userDB; // returns current user logged in
const skills = currentUser && userDB['userAccounts'][currentUser]['skills']; // returns object with skills for current user

function SavedSkill(props){
    // console.log(currentUser, skills);
    // 
    function showProgress(completed=1){
        const bar = $(".progress");
        bar.css("display", "block");
        bar.css("width", `${(100/props.tasks)*completed}%`);
        bar.css("height", `100%`);
        bar.css("background-color", `aquamarine`);
        /* bar.css("border-right", `solid 1px black`); */
    }

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
            <h3 className="skill-title">skill title: {props.title}</h3>
            <p className="skill-status">status: {props.tasks===props.completed ? "Completed!" : "In progress..."}</p>
            <span>progress bar: {props.completed}/{props.tasks}</span>
            <div className="progress">
                <div className="bar" style={progressStyle}></div>
            </div>
        </div>
    )
}

export default SavedSkill