
# daoerche
<div style="text-align: center;">
    <img src="https://raw.githubusercontent.com/daoerche/daoerche/master/BuildReadMe/img/log.jpg" width="600px">
</div>


## What it is?
Front-End Learing

## Commit standard
```js
npm i && npm run cm
```

## Title generation rules
```js
const dirTitleHandle = (path) => {
    if (hasPackageJsonFile) {
        // get!
        const titleCtx = packageJsonFile.name;
    } else {
        for (file in path) {
            fileIsDir ? dirTitleHandle(filePath) : parseFileCtx(filePath);
        }
    }
}

const parseFileCtx = (filePath) => {
    const titleReg = /@title: (.*)/;
    const ctxStr = fileCtx;

    const found = ctxStr.match(titleReg);
    // get!
    const titleCtx = found[1];
}

dirTitleHandle(rootPath);
```

