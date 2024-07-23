// TODO: Include packages needed for this application
const { stringify } = require('querystring');
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');

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
        choices: ['License 1', 'License 2']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    let content = '';
    content += `# ${data.title}\n\n`; // title
    content += `## Description\n\n${data.desc}\n\n`; // description
    content += `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n\n`; // table of contents
    content += `## Installation\n\n${data.install}\n\n`; // installtion
    content += `## Usage\n\n${data.usage}\n\n`; // usage
    content += `## Contributing\n\n${data.cont}\n\n`; // contribution
    content += `## Tests\n\n${data.test}\n\n` // Tests

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
