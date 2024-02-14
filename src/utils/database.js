
// Nested object that holds user accounts.
const userDB = getLocal("skills-tracker") ||
{
    currentUser:"",
    // Object to store user accounts (each containing username, password, skills, dates, video links and to-do list).
    userAccounts:{}
}

// Adds a skill to the specified user's account in the userDB.
const addSkillToUser = (skill) => {
    // console.log(userDB);
    // console.log(userDB.userAccounts); 
    // Initialize skills array if it doesn't exist
    if (!userDB.userAccounts[currentUser]["skills"]) {
        userDB.userAccounts[currentUser]["skills"] = []; 
    }
    // Pushes a new skill to the `skills` array of the specified user.
    userDB.userAccounts[currentUser]["skills"].push(skill)

    // Saves the updated userDB to local storage.
    setLocal("skills-tracker", userDB);
    console.log(`Skill "${skill}" added to user ${currentUser}`);
}

const addStartDate = (date) => {
    // console.log("Username:", username);
    // console.log("UserDB:", userDB);
    // Initialize dates array if it doesn't exist
    if (!userDB.userAccounts[currentUser]["startDate"]) {
        userDB.userAccounts[currentUser]["startDate"] = []; 
    }
    userDB.userAccounts[currentUser]["startDate"].push(date);
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addFinishDate = (date) => {
    // console.log("Username:", username);
    // console.log("UserDB:", userDB);
    // Initialize dates array if it doesn't exist
    if (!userDB.userAccounts[currentUser]["finishDate"]) {
        userDB.userAccounts[currentUser]["finishDate"] = []; 
    }
    userDB.userAccounts[currentUser]["finishDate"].push(date);
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addYoutubeVideos = (video) => {
    // Initialize videos array if it doesn't exist
    if (!userDB.userAccounts[currentUser]["videos"]) {
        userDB.userAccounts[currentUser]["videos"] = []; 
    }
    userDB.userAccounts[currentUser]["videos"].push([video]);
    setLocal("skills-tracker", userDB);
    console.log(userDB.userAccounts);
}

const addToDoList = (toDoItem) => {
    console.log("Adding todo item:", toDoItem);
    // Initialize todolist array if it doesn't exist
    if (!userDB.userAccounts[currentUser]["toDoItems"]) {
        userDB.userAccounts[currentUser]["toDoItems"] = []; 
    }

    console.log("Before push:", userDB.userAccounts[currentUser]["toDoItems"]);

    userDB.userAccounts[currentUser]["toDoItems"].push(toDoItem);
    console.log("After push:", userDB.userAccounts[currentUser]["toDoItems"]);

    setLocal("skills-tracker", userDB);
    console.log("Updated userDB:", userDB.userAccounts);
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

function getLocal(storageKey="skills-tracker"){
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
    //userDB = getLocal("skills-tracker", userDB)
    // add user if not in database, else don't change anything
    if (!userDB.userAccounts[username]) {
        createUser(username, password)
        //saveToLocal();
        // currentUser = username;
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
    //userDB=getLocal("skills-tracker", userDB);
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