
# daoerche
<pre>
                  _                    _ _                          _                         _                    _                
                 | |                  (_|_)                        | |                       (_)                  | |               
 __      _____   | |__   ___ _ __      _ _  ___    __ _  ___    ___| |__   __ _  ___    _ __  _  __ _ _ __     ___| |__   ___ _ __  
 \ \ /\ / / _ \  | '_ \ / _ \ '_ \    | | |/ _ \  / _` |/ _ \  / __| '_ \ / _` |/ _ \  | '_ \| |/ _` | '_ \   / __| '_ \ / _ \ '_ \ 
  \ V  V / (_) | | |_) |  __/ | | |   | | |  __/ | (_| | (_) | \__ \ | | | (_| | (_) | | | | | | (_| | | | | | (__| | | |  __/ | | |
   \_/\_/ \___/  |_.__/ \___|_| |_|   | |_|\___|  \__,_|\___/  |___/_| |_|\__,_|\___/  |_| |_|_|\__,_|_| |_|  \___|_| |_|\___|_| |_|
                                     _/ |                                                                                           
                                    |__/                                                                                            
                                                         我本桀骜少年臣                                                               
                                                                                                                           
          _                    _                   _       _                  _                    _                                  
         | |                  (_)                 (_)     | |                | |                  (_)                               
         | |__  _   _  __  ___ _ __     __ _ _   _ _   ___| |__   ___ _ __   | |__  _   _  __  ___ _ __    _ __ ___ _ __             
         | '_ \| | | | \ \/ / | '_ \   / _` | | | | | / __| '_ \ / _ \ '_ \  | '_ \| | | | \ \/ / | '_ \  | '__/ _ \ '_ \            
         | |_) | |_| |  >  <| | | | | | (_| | |_| | | \__ \ | | |  __/ | | | | |_) | |_| |  >  <| | | | | | | |  __/ | | |           
         |_.__/ \__,_| /_/\_\_|_| |_|  \__, |\__,_|_| |___/_| |_|\___|_| |_| |_.__/ \__,_| /_/\_\_|_| |_| |_|  \___|_| |_|          
                                        __/ |                                                                                       
                                       |___/                                                                                        
                                                         不信鬼神不信人
</pre>


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

