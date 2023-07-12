// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GPL') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'BSD') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === 'None') {
        return ''
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache') {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GPL') {
        return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'BSD') {
        return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === 'None') {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT, Apache, GPL, BSD,') {
      return `## License
This project is licensed under the terms of the ${license} license.`
  } else if (license === 'None') {
 }}

// Function to add TOC
function addTOC(data) {
  if (data.projectTOC) {
      return `## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)`
  } else {
      return '';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tableOfContents = addTOC(data);

return  `## Titles

  ${data.projectTitle}

  ${renderLicenseBadge(data.projectLicense)}
  ${renderLicenseLink(data.projectLicense)}
  ${renderLicenseSection(data.projectLicense)}

  ${tableOfContents}

  ## License
  
  ${data.projectLicense}

  ## Description

  ${data.projectDescription}

  ## Installation

  ${data.projectInstallation}

  ## Usage

  ${data.projectUsage}

  ## Contributing

  ${data.projectContributing}

  ## Tests

  ${data.projectTests}

  ## License

  ${data.projectLicense}

  ## Project Information

 Github: ${data.projectGithub}

 Email:  ${data.projectEmail}`;
}



module.exports = generateMarkdown;
