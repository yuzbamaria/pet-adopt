import "./SavedSkill.css"
import { userDB } from "../../utils/database"
const { currentUser } = userDB; // returns current user logged in
const skills = currentUser && userDB['userAccounts'][currentUser]['skills']; // returns object with skills for current user

function SavedSkill(props){
    // console.log(currentUser, skills);
    return (
        <div className="saved-skill">
            <h3 className="skill-title">skill title: {props.title}</h3>
            <p className="skill-status">skill status</p>
            <div className="progress">progress bar: 0/{props.tasks}</div>
        </div>
    )
}

export default SavedSkill