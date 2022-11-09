// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  } else if (license === 'BSD') {
    badge = '[![License: BSD](https://img.shields.io/badge/license-BSD-green.svg)](https://opensource.org/licenses/BSD-3-Clause)'

  } else if (license === 'GPL') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

  } else {
    return 'No License'
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'

  } else if (license === 'BSD') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/'

  } else if (license === 'GPL') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'

  } else {
    return '';
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license !== 'None') {
    licenseSection = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
    return licenseSection;

  } else {
    return 'No license selected';
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Test](#tests)

  * [Questions](#questions)

  * [License](#license)

  ## Installation

  ${data.installation}

  ## Tests

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Questions

  Any questions or contributions, contact me directly at ${data.email}. Want to check out more of my work? [${data.usename}](https://github.com/${data.username}).

  ## License

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
