class Vue {
    constructor(options) {
        const data = options.data;
        this._data = data;
        
        _proxy(this, '_data', data);
        observe(data);

        /**
         * 这里创建一个很简单的watch实例
         * 观察者函数类似一个计算属性
         * 在计算属性成功被通知更改后，我们通过回调打印出当前观察者函数的值
         */ 
        new Watch(this, function() {
            return data.name + ' create defineReactive success!!!'
        }, function() {
            console.log('Watch cb:', this.value);
        })
    }
}

const _proxy = function(vm, sourceKey, data) {
    const keys = Object.keys(data);

    keys.forEach(key => {
        Object.defineProperty(vm, key, {
            get() {
                return vm[sourceKey][key];
            },
            set(val) {
                vm[sourceKey][key] = val;
            }
        })
    })
}

const observe = function(data) {
    const ob = new Observer(data);
}

class Observer {
    constructor(data) {
        this.walk(data);
    }

    walk(data) {
        Object.keys(data).forEach(key => {
            defineReactive(data, key);
        })
    }
}

const defineReactive = function(obj, key) {
    let val = obj[key];
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log('我被收集了!!!');
            dep.depend();
            return val;
        },
        set(newVal) {
            // 这里是更新一下缓存的最新值
            val = newVal;
            console.log('我要发布值被更改了!!!');
            dep.notify();
        }
    })
}

// 每个数据都有自己的Dep实例，用来收集所有用到了自己的Watch实例，以此来触发所有的观察者函数
class Dep {
    constructor() {
        this.id = Dep.uid++;
        this.subs = [];
    }

    // 收集watch实例
    addSub(sub) {
        this.subs.push(sub);
    }

    // 收集依赖
    depend() {
        if (Dep.target) {
            /**
             * 通过Watch实例的addDep来收集依赖
             * 为什么要转这么一步不直接添加进this.subs呢？
             * 这是因为并不是无脑添加就行了，我还得能够移除，也就是有些观察者函数依赖的变量变了，有个数据没用了，那么我得要能够移除这个数据dep的watch
             * 也就是说我得要知道观察者函数所依赖的数据(相当于就是Dep实例)的增减，而这个依赖的数据时跟观察者函数走的
             * 那么存在Watch上再好不过了，所以这里先重新触发会Watch实例本身来统计dep，其实想想整个触发流程非常巧妙：
             * Watch触发观察者函数 -> 观察者函数执行触发每个数据读取 -> 数据读取触发getter -> getter触发Dep的depend
             * depend重新通知回Watch -> Watch统计数据的Dep并通知哪些Dep需要添加或删除该Watch
             */ 
            Dep.target.addDep(this);
        }
    }

    // 移除watch实例
    removeSub(sub) {
        const subIdx = this.subs.indexOf(sub);
        this.subs.splice(subIdx, 1);
    }

    notify() {
        this.subs.forEach(sub => sub.update());
    }
}
Dep.uid = 0;
Dep.target = null;

// 使用数据的地方被封装成观察者函数，而Watch则来包装每个观察者函数
class Watch {
    constructor(vm, render, cb) {
        this.vm = vm;
        this.render = render;
        this.cb = cb;

        this.deps = [];
        this.depsIds = new Set();
        this.newDeps = [];
        this.newDepsIds = new Set();

        // 计算本次的值
        this.value = this.get();
        this.cb(this.value);
    }

    get() {
        // 挂载本次执行的watch实例
        Dep.target = this;

        // 先清空环境
        this.newDeps = [];
        this.newDepsIds = new Set();

        // 调用观察者函数，触发getter，从而收集依赖，触发depend
        const value = this.render();

        // 开始清理工作
        Dep.target = null;

        // 清理不使用的依赖
        this.deps.forEach(oldDep => {
            const notExistInNewDeps = !this.newDepsIds.has(oldDep.id);
            // 如果上一轮依赖的数据在本次依赖中已经没有，说明已经不依赖这些数据了，那么需要清理这些数据subs中的watch
            if (notExistInNewDeps) {
                oldDep.removeSub(this);
            }
        });
        this.deps = this.newDeps;
        this.depsIds = this.newDepsIds;

        // 返回本次计算的值
        return value;
    }

    addDep(dep) {
        const depId = dep.id;

        // 如果newDeps里没有当前数据的dep才放进去，不重复收集
        if (!this.newDepsIds.has(depId)) {
            this.newDeps.push(dep);
            this.newDepsIds.add(depId);

            // 新依赖的数据没有，而且发现上次依赖的也没有，那么证明当前watch没有被收集进数据dep的依赖中，则添加addSub进去
            if (!this.depsIds.has(depId)) {
                dep.addSub(this);
            }
        }
    }

    // 更新本次值
    update() {
        this.value = this.get();
        this.cb(this.value);
    }
}