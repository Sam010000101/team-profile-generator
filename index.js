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

const questions = [
    {
        type: 'input',
        name: 'team_managers_name',
        message: "What is your team manager's name?",
    },
    {
        type: 'input',
        name: 'team_manager_id',
        message: "What is your team manager's id?",
    },
    {
        type: 'input',
        name: 'team_manager_email_address',
        message: "What is your team manager's email address?",
    },
    {
        type: 'input',
        name: 'team_manager_phone',
        message: "What is your team manager's office phone number?",
        validate(value) {
            const pass = value.match(
                /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
                return true;
            }
            return 'Please enter a valid phone number';
        },
    },

    {
        type: 'list',
        name: 'add_or_build',
        message: 'What do you want to do next?',
        choices: [
            "Add an engineer?",
            "Add an intern?",
            "Finish building the team?"
        ]

    },

    {
        type: 'input',
        name: 'engineers_name',
        message: "What is your engineer's name?",
        when: (answers => answers['add_or_build'] === "Add an engineer?")
    },

    {
        type: 'input',
        name: 'engineers_id',
        message: "What is your engineer's id?",
        when: (answers => answers['add_or_build'] === "Add an engineer?")
    },

    {
        type: 'input',
        name: 'engineers_email',
        message: "What is your engineer's email address?",
        when: (answers => answers['add_or_build'] === "Add an engineer?")
    },

    {
        type: 'input',
        name: 'engineers_github',
        message: "What is your engineer's GitHub username?",
        when: (answers => answers['add_or_build'] === "Add an engineer?")
    },


    
];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});

