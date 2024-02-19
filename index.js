const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests executed'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices:['MIT', 'Apachev2.0', 'GNU GPLv3', 'Creative Commons Zero v1.0 Universal', 'BSD 3-Clause "Revised"', 'BSD 2-Clause "Simplified"','The Unlicense']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github user name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email id'
    }
];



// function to write README file
function writeToFile(fileName, data){
    const createFile = fs.writeFile(path.join(__dirname,"yourReadme", 'README.md'), data, (err)=>{
        err?console.log(err):console.log('Success!')
    })
    // fs.writeFile(fileName, data, (err) => {
    //     err?console.log(err) : console.log('Success!')
    // })
}

// function to initialize program
function init(){
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers);
            const answersToMd = generateMarkdown(answers);
            // console.log(answersToMd);
            const fileName = "newREADME.md";
            writeToFile(fileName, answersToMd);
        });
}

// function call to initialize program
init();