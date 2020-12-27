const path = require('path');

const rootPath = path.join(__dirname, '..', '..');

const readMePath = path.join(rootPath, 'README.md');

const templatePath = path.join(__dirname, '..', 'template');
const titleMdPath = path.join(templatePath, 'title.md');
const descriptionMdPath = path.join(templatePath, 'description.md');

const paths = {
    rootPath,
    readMePath,
    templatePath,
    titleMdPath,
    descriptionMdPath,
}

module.exports = {
    ...paths
}
