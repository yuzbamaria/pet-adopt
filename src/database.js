
let currentUser;


let userDB = {
    userAccounts:{}
}

const addSkill = (username, skill)=>{
    userDB.userAccounts[username]["skills"].push(skill)
    saveToLocal();
}

const createUser = (username, pass)=>{
    userDB.userAccounts[username]={
        ...userDB.userAccounts[username],
        password:pass,
        skills:[],
    }
}

function checkLocal(){
    // use this function BEFORE adding new data to userDB. 
    // checks if saved data exists in local storage and loads it to userDB if it exists.
    userDB = (localStorage.getItem("skills-tracker")) ? JSON.parse(localStorage.getItem("skills-tracker")) : userDB;
}

function saveToLocal(){
    // use this function AFTER adding new data to userDB.
    // saves all objects nested in userDB to localStorage.
    localStorage.setItem("skills-tracker", JSON.stringify(userDB));
}

function signupNewUser (userInput){
    const username = userInput[0];
    const password = userInput[1];
    checkLocal()
    // add user if not in database, else don't change anything
    if (!userDB.userAccounts[username]) {
        createUser(username, password)
        saveToLocal();
        currentUser = username;
        console.log("new user signed up!");     
        return true;
    }
    else console.log("User already exists!")
    //console.log(userDB);
    // if (userDB["userAccounts"][userInput[0]] === userInput[1]){
        //     // if sign up successful, authenticate login and redirect to successful login
        // }
}

function authenticateUser(userInput){
    const username = userInput[0];
    const password = userInput[1];
    checkLocal()
    if (userDB.userAccounts[username]["password"] === password){
        console.log("successful login")
        currentUser = username;
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

export {currentUser, signupNewUser, authenticateUser, addSkill} 