
# daoerche
![image](BuildReadMe/img/log.jpg)


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

