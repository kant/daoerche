const execSync = require('child_process').execSync;
const { tryExecSync } = require('./utils');

module.exports = {
    gitAddAllFile: () => tryExecSync(() => execSync('git add -A')),

    gitStatusList: () => tryExecSync(() => execSync('git status --porcelain'))
}
