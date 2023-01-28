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

const questionsTeamManager = [
    {
        type: 'input',
        name: 'team_manager_name',
        message: "What's your name?",
    },
    {
        type: 'input',
        name: 'team_manager_id',
        message: "What's your employee ID?",
    },
    {
        type: 'input',
        name: 'team_manager_email_address',
        message: "What's your email address?",
    },
    {
        type: 'input',
        name: 'team_manager_phone',
        message: "What's your office phone number?",
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

    }

];

inquirer.prompt(questionsTeamManager).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});

