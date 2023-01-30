const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let employees = [];

// log "Please build your team"
console.log("Please build your team");

// questions re: team manager
const teamManagerQuestions = [
    {
        // enter team manager's name
        type: 'input',
        name: 'teamManagerName',
        message: "What is the team manager's name?",
    },
    {
        // enter team manager's id
        type: 'input',
        name: 'teamManagerId',
        message: "What is the team manager's id?",
    },
    {
        // enter team manager's email address
        type: 'input',
        name: 'teamManagerEmail',
        message: "What is the team manager's email address?",
    },
    {
        // enter team manager's phone number
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office phone number?",
        // validation with regex for phone number
        validate(value) {
            const pass = value.match(
                /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
                return true;
            }
            return 'Please enter a valid phone number';
        },
    }
];



// pivotal question that will enable the user to add an engineer,  or an intern, or build team
const pivotQuestion = {
    type: 'list',
    name: 'menu',
    message: 'What do you want to do next?',
    choices: [
        "Add an engineer?",
        "Add an intern?",
        "Finish building the team?"
    ]

};


// questions re: engineer
const engineersQuestions = [

    {
        // enter engineer's name
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
    },

    {
        // enter engineer's id
        type: 'input',
        name: 'engineerId',
        message: "What is your engineer's id?",
    },

    {
        // enter engineer's email
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email address?",
    },

    {
        // enter engineer's github username
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?",
    }

];


// questions re: intern
const internQuestions = [
    {
        // enter intern's name
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?",
    },

    {
        // enter intern's id
        type: 'input',
        name: 'internId',
        message: "What is your intern's id?",
    },

    {
        // enter intern's email
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email address?",
    },

    {
        // enter intern's school
        type: 'input',
        name: 'school',
        message: "What is your intern's school?",
    }

];
// Function to pass manager response array to Manager.js 
function getManagerInfo() {
    inquirer.prompt(teamManagerQuestions).then((responseManager) => {
        console.log(responseManager);
        employees.push(new Manager(
            responseManager.teamManagerName,
            responseManager.teamManagerId,
            responseManager.teamManagerEmail,
            responseManager.officeNumber
        ));
        addEmployees()
    })
}
// Function to call pivot questions & determine whether to add an engineer or intern or finish building the team 
function addEmployees() {
    return inquirer.prompt(pivotQuestion).then((response) => {
        console.log(response);

        if (response.menu === "Add an engineer?") {
            getEngineerInfo()
        }
        else if (response.menu === "Add an intern?") {
            getInternInfo()
        }
        else{
            console.log('Complete!');
            fs.write(outputPath,render(employees),(err) => err ? console.log("err") : console.log("Success"))
        }
    })
}



getManagerInfo()