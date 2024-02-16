// function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contribution, tests, license, username, email} = data;
    return `# ${title}

## Description
    
${description} 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contibuting](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
    
${installation}

## Usage

${usage}

## Contributing

${contribution}

## Tests

${tests}

## License

${license} License

## Questions

Visit my [Github Profile](https://github.com/${username})

More questions? Reach out to me by [email](mailto:${email})`;

}
  
module.exports = generateMarkdown;
  