// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { listenerAdded } = require("emittery");
const { choices } = require("yargs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
function appMenu() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What the employee's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is their email?",
            name: "email",
        },
        {
            type: "list",
            message: "What is the employee's position?",
            name: "position",
            choices: ["Engineer", "Intern", "Manager", "done"],
        },

    ]).then((answer) => {
        console.log(answer);

        if (answer.userChoice === "Engineer") {
            createEngineer()
        }

    })
}
function createEngineer() {
    inquirer.prompt([

        {
            type: "input",
            message: "What is the engineer's github?",
            name: "github"
        },

    ]).then((answer) => {
        console.log(answer);
        appMenu(userChoice)
    })
};

appMenu

