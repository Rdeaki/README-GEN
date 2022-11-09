// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
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
        message: 'Enter your projects title.',
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
    {
        type: 'list',
        message: 'Enter a license option for your project.',
        choices: ['MIT','BSD','GPL','none'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter dependecies required for you project to run.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter a brief rundown of your project usage.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Include a short walkthrough on running tests.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Include any contributions to your preoject.',
        name: 'contributing'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {

        if (err) {
            console.log(err);
            return;
        }
        console.log('Your ReadMe has been genereated succesfully!')
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions)

        console.log('Your responses: ', userResponses)
        
        const readMeFile = generateMarkdown(userResponses)
        writeToFile('.ExampleREADME.md', readMeFile)

    } catch (error) {
        console.log(error)
    }
};

// Function call to initialize app
init();
