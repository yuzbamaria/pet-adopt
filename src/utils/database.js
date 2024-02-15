
// Nested object that holds user accounts.
const userDB = getLocal("skills-tracker") ||
{
    currentUser:"",
    // Object to store user accounts (each containing username, password, skills, dates, video links and to-do list).
    userAccounts:{}
}

// Adds a skill to the specified user's account in the userDB.
const addSkillToUser = (skill, user) => {
    // console.log(userDB);
    // console.log(userDB.userAccounts); 
    // Initialize skills array if it doesn't exist
    if (!userDB.userAccounts[user]["skills"]) {
        userDB.userAccounts[user]["skills"] = {}; 
    }
    // Pushes a new skill to the `skills` array of the specified user.
    userDB.userAccounts[user]["skills"][skill] = {
        book:[],
        savedBooks:[],
        videos:[],
        toDoItems:[],
    };

    // Saves the updated userDB to local storage.
    setLocal("skills-tracker", userDB);
    console.log(`Skill "${skill}" added to user ${user}`);
}

export const addBooks = (booksObj, key="books") => {
    const user = userDB.currentUser;
    const skill = getCurrentSkill();
    // if (!skill)return;
    if (!userDB.userAccounts[user]["skills"][skill][key]) {
        userDB.userAccounts[user]["skills"][skill][key] = {}; 
    }
    console.log(booksObj)
    // userDB.userAccounts[user]["skills"][skill][key] = [];
    userDB.userAccounts[user]["skills"][skill][key] = booksObj;
    setLocal("skills-tracker", userDB);
}

export function getCurrentSkill(user=userDB.currentUser, indexOffset=1){
    if(userDB.userAccounts[user]["skills"])
    {
        const skills = userDB.userAccounts[user]["skills"];
        const index = Object.keys(skills).length;
        const lastKey = Object.keys(skills)[index-indexOffset];
        // console.log(index)
        // console.log(lastKey)
        return lastKey;
    }else {
        // return ""
        throw new Error("You need to create a skill first!")
    }
}

const addStartDate = (date, user) => {
    const skill = getCurrentSkill(user);
    if (!skill) throw new Error("Create a skill!")
    // console.log("Username:", username);
    // console.log("UserDB:", userDB);
    // Initialize dates array if it doesn't exist
    if (!userDB.userAccounts[user]["skills"][skill]["startDate"]) {
        userDB.userAccounts[user]["skills"][skill]["startDate"] = []; 
    }
    userDB.userAccounts[user]["skills"][skill]["startDate"]=date;
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addFinishDate = (date, user) => {
    const skill = getCurrentSkill(user);
    if (!skill) throw new Error("Create a skill!")
    // console.log("Username:", username);
    // console.log("UserDB:", userDB);
    // Initialize dates array if it doesn't exist
    if (!userDB.userAccounts[user]["skills"][skill]["finishDate"]) {
        userDB.userAccounts[user]["skills"][skill]["finishDate"] = []; 
    }
    userDB.userAccounts[user]["skills"][skill]["finishDate"]=date;
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addYoutubeVideos = (video, user) => {
    const skill = getCurrentSkill(user);
    if (!skill) throw new Error("Create a skill!")
    // Initialize videos array if it doesn't exist
    if (!userDB.userAccounts[user]["skills"][skill]["videos"]) {
        userDB.userAccounts[user]["skills"][skill]["videos"] = []; 
    }
    userDB.userAccounts[user]["skills"][skill]["videos"]=[...video];
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addToDoList = (toDoItem, user) => {
    const skill = getCurrentSkill(user);
    if (!skill) throw new Error("Create a skill!")
    console.log("Adding todo item:", toDoItem);
    // Initialize todolist array if it doesn't exist
    if (!userDB.userAccounts[user]["skills"][skill]["toDoItems"]) {
        userDB.userAccounts[user]["skills"][skill]["toDoItems"] = []; 
    }

    console.log("Before push:", userDB.userAccounts[user]["skills"]["toDoItems"]);

    userDB.userAccounts[user]["skills"][skill]["toDoItems"].push(toDoItem);
    console.log("After push:", userDB.userAccounts[user]["skills"][skill]["toDoItems"]);

    setLocal("skills-tracker", userDB);
    console.log("Updated userDB:", userDB.userAccounts);
}

export function toDoCompleted(updated, user){
    const skill = getCurrentSkill(user);
    if (!skill) throw new Error("Create a skill!")
    const todo = userDB.userAccounts[user]["skills"][skill]["toDoItems"];
    const index = todo.length;
    todo[index-1].completed = updated.completed;
    setLocal("skills-tracker", userDB);
}

// Creates a new user account.
const createUser = (username, pass)=>{
    // Adds a new user account to `userAccounts`.
    userDB.userAccounts[username]={
        // Sets the password for the new user account.
        password:pass,
        // Initializes an empty array for the skills of the new user account.
        // skills:{},
        // Initializes an empty array for the dates of the new user account.
        // startDate: [],
        // finishDate: [],
        // videos: [],
        // toDoItems: [],
    }
}

function getLocal(storageKey="skills-tracker"){
    // use this function BEFORE adding new data to userDB. 
    // checks if saved data exists in local storage and loads it to userDB if it exists.
    return JSON.parse(localStorage.getItem(storageKey));
   
}

function setLocal(storageKey, storageValue){
    // use this function AFTER adding new data to userDB.
    // saves all objects nested in userDB to localStorage.
    console.log(storageValue);
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
}

function signupNewUser (userInput){
    const username = userInput[0];
    const password = userInput[1];
    //userDB = getLocal("skills-tracker", userDB)
    // add user if not in database, else don't change anything
    if (!userDB.userAccounts[username]) {
        createUser(username, password)
        userDB.currentUser = username;
        setLocal("skills-tracker", userDB);
        console.log("new user signed up!");     
        return true;
    }
    else console.log("User already exists!")
    //console.log(userDB);
    // if (userDB["userAccounts"][userInput[0]] === userInput[1]){
        //     // if sign up successful, authenticate login and redirect to successful login
        // }
}

export function logOut(){
    userDB.currentUser = "";
    setLocal("skills-tracker", userDB);
}

function authenticateUser(userInput){
    const username = userInput[0];
    const password = userInput[1];
    console.log(userInput)
    console.log(userDB)
    if (userDB.userAccounts[username]["password"] === password){
        console.log("successful login")
        // currentUser = username;
        userDB.currentUser = username;
        setLocal("skills-tracker", userDB);
        return true;
    }
    else if (userDB.userAccounts[username] && userDB.userAccounts[username]["password"] !== password){
        console.log("incorrect password!")
        //incorrect password message
    }
    else if (!userDB.userAccounts[username]){
        console.log("user does not exist!")
        // user does not exist message
    }
}

export {userDB, signupNewUser, authenticateUser, addSkillToUser, addStartDate, addFinishDate, addYoutubeVideos, addToDoList, getLocal, setLocal} 