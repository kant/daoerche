const path = require('path');
const fs = require('fs');

const execSync = require('child_process').execSync;

execSync('git add -A');
const filesStatus = execSync('git status --porcelain').toString().trim();
console.log(filesStatus);

const titleMdCtx = fs.readFileSync(path.join(__dirname, 'template', 'title.md'), 'utf8');
const desMdCtx = fs.readFileSync(path.join(__dirname, 'template', 'description.md'), 'utf8');

const readMeCtx = 
`
${titleMdCtx}

${desMdCtx}
`;

fs.writeFileSync(path.join(__dirname, '..', 'README.md'), readMeCtx, 'utf8');
execSync('git add -A');