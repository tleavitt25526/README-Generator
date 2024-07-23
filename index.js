// TODO: Include packages needed for this application
const { stringify } = require('querystring');
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your project description?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    let content = '';
    content += `# ${data.Title}\n\n`;
    content += `## Description\n\n${data.Description}\n\n`;

    fs.writeFile(`./generated/${fileName}`, content, function (err) {
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
            console.log(`Answers: ${stringify(answers)}`);
            writeToFile('README.md', answers);
        });
}

// Function call to initialize app
init();
