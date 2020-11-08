const execSync = require('child_process').execSync;

tryExecSync = (cb) => {
    let result = '';
    try {
        result = cb();
    } catch (e) {
        result = e.message;
    }
    return result;
}

module.exports = {
    gitAddAllFile: () => tryExecSync(() => execSync('git add -A')),

    gitStatusList: () => tryExecSync(() => execSync('git status --porcelain'))
}
