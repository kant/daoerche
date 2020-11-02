const execSync = require('child_process').execSync;

module.exports = {
    gitAddAllFile() {
        return execSync('git add -A');
    },

    gitStatusList() {
        return execSync('git status --porcelain');
    }
}
