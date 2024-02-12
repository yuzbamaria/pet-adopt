
let userDB = {
    userAccounts:{},
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
    // console.log(...userInput);
    // add user/pwd if not in database, else don't change anything
    checkLocal()
    userDB["userAccounts"][userInput[0]] = !userDB["userAccounts"][userInput[0]] ? userInput[1] : userDB["userAccounts"][userInput[0]]
    //console.log(userDB);
    if (userDB["userAccounts"][userInput[0]] === userInput[1]){
        // if sign up successful, authenticate login and redirect to successful login
        console.log("new user signed up!");     
        saveToLocal();
        return true;        
    }
}

function authenticateUser(userInput){
    // console.log(...userInput);
    checkLocal()
    if (userDB["userAccounts"][userInput[0]] === userInput[1]){
        console.log("successful login")
        saveToLocal();
        return true;
    }
    else if (userDB["userAccounts"][userInput[0]] && userDB["userAccounts"][userInput[0]] !== userInput[1]){
        console.log("incorrect password!")
        //incorrect password message
    }
    else if (!userDB["userAccounts"][userInput[0]]){
        console.log("user does not exist!")
        // user does not exist message
    }
}

export {signupNewUser, authenticateUser}