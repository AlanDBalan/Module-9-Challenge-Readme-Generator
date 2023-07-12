// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utilities/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'projectContributing',
        message: 'Provide guidelines for how other developers can contribute to your project.',
    },
    {
        type: 'input',
        name: 'projectTests',
        message: 'Provide examples on how to run tests for your project.',
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'projectGithub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'What is your email address?',
    },
    {
        type: 'confirm',
        name: 'projectTOC',
        message: 'Do you want a table of contents?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// When projectTOC is true, add a table of contents to the README

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const markdown = generateMarkdown(response);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
