
// import { useProfileUpdateContext } from "./components/ProfileContext"

// const toggleLogin = useProfileUpdateContext();
const userDB = {

}

// export let loginStatus = false;

function signupNewUser (userInput){
    // console.log(...userInput);
    // add user/pwd if not in database, else don't change anything
    userDB[userInput[0]] = !userDB[userInput[0]] ? userInput[1] : userDB[userInput[0]]
    //console.log(userDB);
    if (userDB[userInput[0]] === userInput[1]){
        // if sign up successful, authenticate login and redirect to successful login
        console.log("new user signed up!");

        return true;        
    }
}

function authenticateUser(userInput){
    // console.log(...userInput);
    if (userDB[userInput[0]] && userDB[userInput[1]]){
        console.log("successful login")
        
        return true;
    }
    else if (userDB[userInput[0]] && !userDB[userInput[1]]){
        console.log("incorrect password!")
        //incorrect password message
    }
    else if (!userDB[userInput[0]]){
        console.log("user does not exist!")
        // user does not exist message
    }
}

export {signupNewUser, authenticateUser}