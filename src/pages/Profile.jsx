import SavedSkill from "../components/SavedSkill/SavedSkill";
import "./css/Profile.css"

function Profile(){
    let loggedIn = false;
    return (
        <div className="profile">
            <SavedSkill />
            <SavedSkill />
            <SavedSkill />
            <SavedSkill />
            <SavedSkill />
            <SavedSkill />
        </div>
    )
}

export default Profile