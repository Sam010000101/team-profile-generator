// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// const Employee = require("./lib/Employee");

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;

    }

    // return github username
    gitHub() {
        return this.github;
    }

    // getGitHub
    getGithub() {
        return this.github;
    }

    // return role "Engineer"
    getRole() {
        return "Engineer";
    }


}



module.exports = Engineer;
