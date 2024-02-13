import SavedSkill from "../components/SavedSkill/SavedSkill";
import "./css/Profile.css"

function Profile(){
    let loggedIn = false;
    return (
        <div className="wrapper">
            <div className="profile">
                <SavedSkill />
                <SavedSkill />
                <SavedSkill />
                <SavedSkill />
                <SavedSkill />
                <SavedSkill />
            </div>
        </div>
    )
}

export default Profile