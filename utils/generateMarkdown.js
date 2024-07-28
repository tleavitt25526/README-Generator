// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
{
  if (license == 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license == 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)
{
  if (license == 'MIT License') {
    return 'https://opensource.org/license/MIT';
  }
  else if (license == 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{
  // if (license == 'MIT License') {
    
  // }
  // else if (license == 'GNU General Public License') {
    
  // }
  let content = '';
  content += `## License\n\n`;
  content += `Distributed under the ${license}.`;
  return content;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let content = '';

  content += `# ${data.title}\n\n`; // title
  content += `## Description\n\n${data.desc}\n\n`; // description
  content += `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n\n`; // table of contents
  content += `## Installation\n\n${data.install}\n\n`; // installtion
  content += `## Usage\n\n${data.usage}\n\n`; // usage
  content += `## Contributing\n\n${data.cont}\n\n`; // contribution
  content += `## Tests\n\n${data.test}\n\n`; // Tests
  content += renderLicenseSection(data.license);
  content += `## Questions\n\n`;
  content += `My GitHub username is ${data.user}\n`;
  content += `My email is ${data.email}\n`;

  return content;
}

module.exports = generateMarkdown;
