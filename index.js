// TODO: Include packages needed for this application
const { stringify } = require('querystring');
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Description:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation Instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:'
    },
    {
        type: 'input',
        name: 'cont',
        message: 'Contribution Guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test Instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License:',
        choices: ['MIT License', 'GNU General Public License']
    },
    {
        type: 'input',
        name: 'user',
        message: 'GitHub Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    fs.writeFile(`./generated/${fileName}`, generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log("README created");
    })
}

// TODO: Create a function to initialize app
function init()
{
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(`Answers Collected`);
            writeToFile('README.md', answers);
        });
}

// Function call to initialize app
init();
