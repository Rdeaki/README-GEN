// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Questions

  Any questions or contributions, contact me directly at ${data.email}. Want to check out more of my work? [${data.usename}](https://github.com/${data.username}).


`;
}

module.exports = generateMarkdown;
