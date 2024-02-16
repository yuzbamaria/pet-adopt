import SavedSkill from "../components/SavedSkill/SavedSkill";
import "./css/Profile.css"
import { userDB } from "../utils/database"

function Profile(){
    const { currentUser } = userDB; // returns current user logged in
    const skills = currentUser && userDB['userAccounts'][currentUser]['skills']; // returns object with skills for current user
    const skillsKeysArray = skills ? Object.entries(skills) : [];
    // console.log(currentUser, skills, skillsKeysArray);
    // skillsKeysArray.map((skill, index)=>{
    //     // console.log(index)
    //     // console.log(skill[0])
    //     // console.log(skill[1].totalTasks)
    //     console.log(skill[1].progress);
    // })
    return (
        <div className="wrapper container min-vh-100 ">
            <div className="profile">
                {skills &&
                skillsKeysArray.map((skill, index)=>(
                    <SavedSkill 
                        key={index}
                        title={skill[0]}
                        tasks={skill[1].totalTasks}
                        completed={skill[1].progress===undefined ? 1 : skill[1].progress}
                    />
                ))}
            </div>
        </div>
    )
}

export default Profile