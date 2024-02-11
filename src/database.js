
const userDB = {

}

function signupNewUser (userInput){
    // console.log(...userInput);
    // add user/pwd if not in database, else don't change anything
    userDB[userInput[0]] = !userDB[userInput[0]] ? userInput[1] : userDB[userInput[0]]
    //console.log(userDB);
    if (userDB[userInput[0]] === userInput[1]){
        // if sign up successful, authenticate login and redirect to successful login
        
    }
}

function authenticateUser(userInput){
    // console.log(...userInput);
    if (userDB[userInput[0]] && userDB[userInput[1]]){
        //redirect user to successful login
    }
    else if (userDB[userInput[0]] && !userDB[userInput[1]]){
        //incorrect password message
    }
    else if (!userDB[userInput[0]]){
        // user does not exist message
    }
}

export {signupNewUser, authenticateUser}