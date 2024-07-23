// TODO: Include packages needed for this application
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'Title: ',
    'Description: ',
    'Installation Instructions: ',
    'Contribution Guidelines: ',
    'Test Instructions: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    fs.writeFile(`./generated/${fileName}`, data, function (err) {
        if (err) throw err;
        console.log('README.md generated!');
    })
}

// TODO: Create a function to initialize app
function init()
{
    writeToFile('README.md', 'Hello, World!');
}

// Function call to initialize app
init();
