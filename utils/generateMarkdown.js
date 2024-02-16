// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
    
${data.description} 

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Contibuting](#contribution)
-[Tests](#tests)
-[License](#license)
-[Questions](#questions)

## Installation
    
${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

## License

${data.license} License

## Questions

Visit my [Github Profile](https://github.com/${data.username})

More questions? Reach out to me by [email](${data.email})`;

}
  
  module.exports = generateMarkdown;
  