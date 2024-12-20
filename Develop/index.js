// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [  
    {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project?:',
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: 'What are the focal areas of your readMe file?:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the install instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the app?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who contributed?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license does the project use?',
  },
];

function generateReadme(data) {
    return `
  # ${data.projectName}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * ${data.tableOfContents}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## Tests
  ${data.tests}
  
  ## License
  This project is licensed under the ${data.license} license.
  `;
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('README.md has been generated successfully!');
        }
      });
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
      });
    
}

// Function call to initialize app
init();
