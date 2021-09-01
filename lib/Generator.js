const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const generateHTML = require('../src/generateHTML.js');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Generator {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    initializeGenerator() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team manager’s name?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the team manager’s name!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team manager’s employee ID?',
                validate: idInput => {
                    if (idInput) {
                    return true;
                    } else {
                    console.log('Please enter the team manager’s employee ID!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team manager’s email address?',
                validate: emailInput => {
                    if (emailInput) {
                    return true;
                    } else {
                    console.log('Please enter the team manager’s email address!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team manager’s office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                    return true;
                    } else {
                    console.log('Please enter the team manager’s office number!');
                    return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber);
            this.presentMenu();
        });
    }

    presentMenu() {
        inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        })
        .then(({ menu }) => {
            if (menu === 'add an engineer') {
                this.addEngineer();
            } else if (menu === 'add an intern') {
                this.addIntern();
            } else if (menu === 'finish building my team') {
                writeToFile(generateHTML(this));
            }
        });
    }

    addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer’s name?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the engineer’s name!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer’s employee ID?',
                validate: idInput => {
                    if (idInput) {
                    return true;
                    } else {
                    console.log('Please enter the engineer’s employee ID!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer’s email address?',
                validate: emailInput => {
                    if (emailInput) {
                    return true;
                    } else {
                    console.log('Please enter the engineer’s email address!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer’s GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                    return true;
                    } else {
                    console.log('Please enter the engineer’s GitHub username!');
                    return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineers.push(new Engineer(name, id, email, github));
            this.presentMenu();
        });
    }

    addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern’s name?',
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter the intern’s name!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern’s employee ID?',
                validate: idInput => {
                    if (idInput) {
                    return true;
                    } else {
                    console.log('Please enter the intern’s employee ID!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern’s email address?',
                validate: emailInput => {
                    if (emailInput) {
                    return true;
                    } else {
                    console.log('Please enter the intern’s email address!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern’s school?',
                validate: schoolInput => {
                    if (schoolInput) {
                    return true;
                    } else {
                    console.log('Please enter the intern’s school!');
                    return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, school }) => {
            this.interns.push(new Intern(name, id, email, school));
            this.presentMenu();
        });
    }

    writeToFile(html) {
        return new Promise((resolve, reject) => {
          fs.writeFile('./dist/index.html', html, err => {
              if (err) {
                reject(err);
                return;
              }
        
              resolve({
                ok: true,
                message: 'File created!'
              });
          });
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
          console.log(err);
        });
    }
}

module.exports = Generator;