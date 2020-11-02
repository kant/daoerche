const path = require('path');
const fs = require('fs');
const { gitAddAllFile, gitStatusList } = require("./cmd/git");


gitAddAllFile();
const filesStatus = gitStatusList().toString().trim();

console.log(filesStatus);

const titleMdCtx = fs.readFileSync(path.join(__dirname, 'template', 'title.md'), 'utf8');
const desMdCtx = fs.readFileSync(path.join(__dirname, 'template', 'description.md'), 'utf8');

const readMeCtx =
`
${titleMdCtx}

${desMdCtx}
`;

fs.writeFileSync(path.join(__dirname, '..', 'README.md'), readMeCtx, 'utf8');
gitAddAllFile();
