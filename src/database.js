
const userDB = {

}


function signupNewUser (userInput){
    console.log(...userInput);
    // add user/pwd if not in database, else don't change anything
    userDB[userInput[0]] = !userDB[userInput[0]] ? userInput[1] : userDB[userInput[0]]
    console.log(userDB);
}

function authenticateUser(userInput){
    console.log(...userInput);
}

export {signupNewUser, authenticateUser}