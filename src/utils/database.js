
let currentUser;

let userDB = {
    userAccounts:{}
}

const addSkillToUser = (username, skill)=>{
    userDB.userAccounts[username]["skills"].push(skill)
    //saveToLocal();
    setLocal();
}

const addStartDate = (date)=>{
    const index = userDB.userAccounts[currentUser]["skills"].length;
    userDB.userAccounts[currentUser]["skills"][index][0]=date;
}

const createUser = (username, pass)=>{
    userDB.userAccounts[username]={
        password:pass,
        skills:[],
    }
}

function getLocal(storageKey="skills-tracker", storageValue=userDB){
    // use this function BEFORE adding new data to userDB. 
    // checks if saved data exists in local storage and loads it to userDB if it exists.
    storageValue = (localStorage.getItem(storageKey)) ? JSON.parse(localStorage.getItem(storageKey)) : storageValue;
    return storageValue;
}

function setLocal(storageKey="skills-tracker", storageValue=userDB){
    // use this function AFTER adding new data to userDB.
    // saves all objects nested in userDB to localStorage.
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
}

function signupNewUser (userInput){
    const username = userInput[0];
    const password = userInput[1];
    userDB = getLocal("skills-tracker", userDB)
    // add user if not in database, else don't change anything
    if (!userDB.userAccounts[username]) {
        createUser(username, password)
        //saveToLocal();
        setLocal();
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
    console.log(userInput)
    userDB=getLocal("skills-tracker", userDB);
    console.log(userDB)
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

export {currentUser, signupNewUser, authenticateUser, addSkillToUser, addStartDate, getLocal, setLocal} 