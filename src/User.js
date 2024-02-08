const SkillPath = require("./SkillPath.js")

class User{
    constructor(name, password, email){
        this.name = name;
        this.password = password;
        this.email = email;
        
    }
}

module.exports = User;