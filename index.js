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
console.log("Please build your team");


const teamManagerQuestions = [
    {
        type: 'input',
        name: 'teamManagersName',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'teamManagerId',
        message: "What is the team manager's id?",
    },
    {
        type: 'input',
        name: 'teamManagerEmail',
        message: "What is the team manager's email address?",
    },
    {
        type: 'input',
        name: 'teamManagerPhone',
        message: "What is the team manager's office phone number?",
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

const engineersQuestions = [

    {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
    },

    {
        type: 'input',
        name: 'engineerId',
        message: "What is your engineer's id?",
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email address?",
    },

    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your engineer's GitHub username?",
    }

];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?",
    },

    {
        type: 'input',
        name: 'internId',
        message: "What is your intern's id?",
    },

    {
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email address?",
    },

    {
        type: 'input',
        name: 'internSchool',
        message: "What is your intern's school?",
    }

];


// inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
// });




