const path = require('path');
const fs = require('fs');
const { gitAddAllFile, gitStatusList } = require("./cmd/git");

console.log('Build README:');

console.log('Start add all files.');
gitAddAllFile();
console.log('Add files end.');

const filesStatus = gitStatusList().toString().trim();
console.log('filesStatus:\n', filesStatus);

console.log('Start build readme file.');
const titleMdCtx = fs.readFileSync(path.join(__dirname, 'template', 'title.md'), 'utf8');
const desMdCtx = fs.readFileSync(path.join(__dirname, 'template', 'description.md'), 'utf8');

const readMeCtx =
`
${titleMdCtx}

${desMdCtx}
`;

fs.writeFileSync(path.join(__dirname, '..', 'README.md'), readMeCtx, 'utf8');
console.log('Build readme end.');

console.log('Add Readme files');
gitAddAllFile();
console.log('Finish!!!');
