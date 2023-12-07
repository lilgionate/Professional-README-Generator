// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Please name your Project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project depedencies here.",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GITHUB username.",
    },
    {
        type: "input",
        name: "name",
        message: "State your full name",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GITHUB usernames)",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message:"Provide walkthrough of required tests if applicable.",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({...response}));
    }
    )
}

// Function call to initialize app
init();
