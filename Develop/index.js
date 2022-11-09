// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
        default: 'Rdeaki',
        validate: function (answer) {

        if (answer.length < 1) {
            return console.log('a valid GitHub username is required!');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter a valid email address',
        name: 'email',
        default: 'Rdeakins96@gmail.com',
        validate: function (answer) {

        if (answer.length < 1) {
            return console.log('A valid email is required!')
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter your project title.',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {

        if (answer.length < 1) {
            return console.log('A valid project title is required!');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Include a brief description of you project.',
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {

        if (answer.length < 1) {
            return console.log('A project description is required.');
            }
            return true;
        }
    },        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
