import { bookInfo } from "./api";

// Holds the username of the currently logged-in user.
let currentUser;

// Nested object that holds user accounts.
let userDB = {
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
        userDB.userAccounts[user]["skills"] = []; 
    }
    // Pushes a new skill to the `skills` array of the specified user.
    userDB.userAccounts[user]["skills"].push(skill)

    // Saves the updated userDB to local storage.
    setLocal("skills-tracker", userDB);
    console.log(`Skill "${skill}" added to user ${user}`);
}

const addStartDate = (date, user) => {
    // console.log("Username:", username);
    // console.log("UserDB:", userDB);
    // Initialize dates array if it doesn't exist
    if (!userDB.userAccounts[user]["startDate"]) {
        userDB.userAccounts[user]["startDate"] = []; 
    }
    userDB.userAccounts[user]["startDate"].push(date);
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addFinishDate = (date, user) => {
    // console.log("Username:", username);
    // console.log("UserDB:", userDB);
    // Initialize dates array if it doesn't exist
    if (!userDB.userAccounts[user]["finishDate"]) {
        userDB.userAccounts[user]["finishDate"] = []; 
    }
    userDB.userAccounts[user]["finishDate"].push(date);
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addYoutubeVideos = (video, user) => {
    // Initialize videos array if it doesn't exist
    if (!userDB.userAccounts[user]["videos"]) {
        userDB.userAccounts[user]["videos"] = []; 
    }
    userDB.userAccounts[user]["videos"].push([video]);
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addToDoList = (toDoItem, user) => {
    console.log("Adding todo item:", toDoItem);
    // Initialize todolist array if it doesn't exist
    if (!userDB.userAccounts[user]["toDoItems"]) {
        userDB.userAccounts[user]["toDoItems"] = []; 
    }

    console.log("Before push:", userDB.userAccounts[user]["toDoItems"]);

    userDB.userAccounts[user]["toDoItems"].push(toDoItem);
    console.log("After push:", userDB.userAccounts[user]["toDoItems"]);

    setLocal("skills-tracker", userDB);
    console.log("Updated userDB:", user);
}

// Creates a new user account.
const createUser = (username, pass)=>{
    // Adds a new user account to `userAccounts`.
    userDB.userAccounts[username]={
        // Sets the password for the new user account.
        password:pass,
        // Initializes an empty array for the skills of the new user account.
    }
}

function getLocal(storageKey="skills-tracker", storageValue=userDB){
    // use this function BEFORE adding new data to userDB. 
    // checks if saved data exists in local storage and loads it to userDB if it exists.
    return JSON.parse(localStorage.getItem(storageKey));
}

function setLocal(storageKey, storageValue){
    // use this function AFTER adding new data to userDB.
    // saves all objects nested in userDB to localStorage.
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
}

function signupNewUser (userInput){
    const username = userInput[0];
    const password = userInput[1];
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
    userDB=getLocal("skills-tracker", userDB);
    console.log(userDB)
    if (userDB.userAccounts[username]["password"] === password){
        console.log("successful login")
        currentUser = username;
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