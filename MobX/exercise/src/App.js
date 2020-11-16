import React from 'react';
import './App.css';
import {
    observable,
    action,
    autorun,
    computed,
    extendObservable,
    reaction,
    when,
    trace,
    runInAction,
    flow,
    values, toJS, createAtom, intercept, observe
} from 'mobx';
import { observer } from "mobx-react";
import * as mobx from "mobx";

const appState = observable({
    timer: 0,
    name: 'daoer'
});

const doubleTimer = computed(() => {
    // console.log('doubleTimer emit!');
    return appState.timer * 2;
});

const nameTrans = computed(() => {
    // console.log('nameTrans emit!');
    return appState.name + 'che';
})

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

autorun(function () {
    if (appState.timer > 10) {
        // console.log('timer is > 10:', nameTrans.get());
    }
    // console.log(appState.timer, doubleTimer.get());
});

setInterval(action(function tick() {
    if (appState.timer < 3) {
        appState.name = appState.timer + appState.name;
    }
    appState.timer += 1;
}), 1000);

const App = observer(({ appState, doubleTimer }) => {
    const onReset = () => {
        appState.resetTimer();
        // console.log('resetTimer complate!');
    }

    const renderTimer = () => {
        return (
            <button onClick={onReset}>
                Seconds passed: {appState.timer}, and double val: {doubleTimer.get()}
            </button>
        )
    }

    return (
        <div>
            <h2>This is mobx test.</h2>
            { renderTimer() }
        </div>
    )
})

export default <App appState={appState} doubleTimer={doubleTimer} />;

// var todos = observable([
//     { title: "Spoil tea", completed: true },
//     { title: "Make coffee", completed: false }
// ]);
//
// autorun(() => {
//     // console.log("Remaining:", todos
//     //     .filter(todo => !todo.completed)
//     //     .map(todo => todo.title)
//     //     .join(", ")
//     // );
// });
//
// todos[0].completed = false;
// // 输出: 'Remaining: Spoil tea, Make coffee'
//
// todos[2] = { title: 'Take a nap', completed: false };
// // 输出: 'Remaining: Spoil tea, Make coffee, Take a nap'
//
// todos.shift();
// // 输出: 'Remaining: Make coffee, Take a nap'
//
// const cityName = observable.box("Vienna");
//
// // console.log(cityName.get());
// // 输出 'Vienna'
//
// cityName.observe_(function(change) {
//     // console.log(change.oldValue, "->", change.newValue);
// });
//
// cityName.set("Amsterdam");

// 引用可观察性

// const refObj = extendObservable({
//     message: "Hello world",
//     author: null
// }, {
//     author: observable.ref,
//     message: observable
// });
//
// console.log('refObj', refObj);
//
// reaction(() => refObj, (data) => {
//     console.log('refObj change', refObj);
// });

// refObj.message = '生日快乐！！智~';
// refObj.author = {};
// refObj.author.name = 'daoerche';

// const x = observable.box(3)
// const y = observable.box(1)
// const divided = computed(() => {
//     if (y.get() === 0)
//         throw new Error("Division by zero")
//     return x.get() / y.get()
// })
//
// console.log(divided.get()) // 返回 3
//
// y.set(0) // OK
// try {
//     console.log(divided.get()) // 报错: Division by zero
// } catch (e) {
//     console.log(e);
// }
//
// try {
//     console.log(divided.get()) // 报错: Division by zero
// } catch (e) {
//     console.log(e);
// }
//
// y.set(2)
// console.log(divided.get()) // 已恢复; 返回 1.5
//
// var numbers = observable([1,2,3]);
// var sum = computed(() => numbers.reduce((a, b) => a + b, 0));
//
// var disposer = autorun(() => console.log(sum.get()));
// // 输出 '6'
// numbers.push(4);
// // 输出 '10'
//
// disposer();
// numbers.push(5);
//
// // 这个delay哪怕第一次执行也会推迟这么久
// const a = observable({age: 18});
// autorun(() => {
//     // 假设 profile.asJson 返回的是 observable Json 表示，
//     // 每次变化时将其发送给服务器，但发送前至少要等300毫秒。
//     // 当发送后，profile.asJson 的最新值会被使用。
//     if (a.age > 0) {
//         console.log('a', a.age);
//     }
// }, { delay: 1000 });
//
// console.time('a.age');
// a.age = 10;
// console.timeEnd('a.age');
//
// async function whenTest() {
//     // when 的副作用只执行一次
//     await when(() => a.age === 20)
//     // 等等..
//     console.log('a age change to 20');
// }
// whenTest();
//
// setTimeout(() => a.age = 20, 3000);
// setTimeout(() => a.age = 25, 4000);
// setTimeout(() => a.age = 20, 5000);

// const message = observable({
//     author: {
//         name: 'daoer'
//     }
// })
// // const disposer = autorun(() => {
// //     console.log(message.title)
// //     trace()
// // })
// //
// // message.title = "Hello"
//
// const author = message.author;
// autorun(() => {
//     console.log(author.name)
// })
// message.author.name = "Sara";
// message.author = { name: "John" };




mobx.configure({ enforceActions: 'always' });

const store = observable({
    githubProjects: [],
    state: 'pending'
});

autorun((r) => {
    // r.trace();
    console.log('store change');
    console.log(values(store));
    console.log(toJS(store));
    console.log(store.state, store.githubProjects);
});

// function fetchProjects() {
//     store.githubProjects = []
//     store.state = "pending"
//     setTimeout(() => {
//         const err = null;
//         const projects = ['pen', 'cat', 'dog'];
//
//         if (err) {
//             return action("fetchError", error => {
//                 store.state = "error"
//             })(err);
//         }
//
//         // action("fetchSuccess", projects => {
//         //     const filteredProjects = somePreprocessing(projects)
//         //     store.githubProjects = filteredProjects
//         //     store.state = "done"
//         // })(projects);
//
//         const filteredProjects = somePreprocessing(projects);
//         runInAction(() => {
//             store.githubProjects = filteredProjects
//             store.state = "done"
//         })
//     }, 1000);
// }

const fetchProjects = flow(function * () {
    store.githubProjects = []
    store.state = "pending";

    const projects = yield new Promise((res, rej) => {
        setTimeout(() => res(['pen', 'cat', 'dog']), 1000);
    });

    const filteredProjects = somePreprocessing(projects);
    store.githubProjects = filteredProjects
    store.state = "done"
});

function somePreprocessing(projects) {
    return projects.join(',');
}

fetchProjects();


// class Store {
//     constructor() {
//         autorun(() => {
//             console.log('Store has change');
//             console.log(this.state, this.githubProjects);
//         });
//     }
//
//     @observable githubProjects = []
//     @observable state = "pending" // "pending" / "done" / "error"
//
//     @action
//     fetchProjects() {
//         this.githubProjects = []
//         this.state = "pending"
//         setTimeout(() => {
//             const err = null;
//             const projects = ['pen', 'cat', 'dog'];
//
//             if (err) {
//                 return action("fetchError", error => {
//                     this.state = "error"
//                 });
//             }
//
//             action("fetchSuccess", projects => {
//                 const filteredProjects = this.somePreprocessing(projects)
//                 this.githubProjects = filteredProjects
//                 this.state = "done"
//             })
//         }, 1000);
//     }
//
//     somePreprocessing(projects) {
//         return projects.join(',');
//     }
// }
//
// const store = new Store();
// store.fetchProjects();

// class Clock {
//     atom;
//     intervalHandler = null;
//     currentDateTime;
//
//     constructor() {
//         // 创建一个 atom 用来和 MobX 核心算法交互
//         this.atom =    createAtom(
//             // 第一个参数: atom 的名字，用于调试
//             "Clock",
//             // 第二个参数(可选的): 当 atom 从未被观察到被观察时的回调函数
//             () => this.startTicking(),
//             // 第三个参数(可选的): 当 atom 从被观察到不再被观察时的回调函数
//             // 注意同一个 atom 在这两个状态之间转换多次
//             () => this.stopTicking()
//         );
//     }
//
//     getTime() {
//         // 让 MobX 知道这个 observable 数据源已经使用了
//         // 如果 atom 当前是被某些 reaction 观察的，那么 reportObserved 方法会返回 true
//         // 如果需要的话，reportObserved 还会触发 onBecomeObserved 事件处理方法(startTicking)
//         if (this.atom.reportObserved()) {
//             return this.currentDateTime;
//         } else {
//             // 显然 getTime 被调用的同时并没有 reaction 正在运行
//             // 所以，没有人依赖这个值，因此 onBecomeObserved 处理方法(startTicking)不会被触发
//             // 根据 atom 的性质，在这种情况下它可能会有不同的表现(像抛出错误、返回默认值等等)
//             return new Date();
//         }
//     }
//
//     tick() {
//         this.currentDateTime = new Date();
//         // 让 MobX 知道这个数据源发生了改变
//         this.atom.reportChanged();
//     }
//
//     startTicking() {
//         this.tick(); // 最初的运行
//         this.intervalHandler = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     stopTicking() {
//         clearInterval(this.intervalHandler);
//         this.intervalHandler = null;
//     }
// }
//
// const clock = new Clock();
//
// const disposer = autorun(() => console.log(clock.getTime()));

const theme = observable({
    backgroundColor: "#ffffff"
});

const disposer1 = observe(theme, (change) => {
    console.log(change.type, change.name, "from", change.oldValue, "to", change.object[change.name]);
});

const disposer2 = intercept(theme, "backgroundColor", change => {
    if (!change.newValue) {
        // 忽略取消设置背景颜色
        return null;
    }
    if (change.newValue.length === 6) {
        // 补全缺少的 '#' 前缀
        change.newValue = '#' + change.newValue;
        return change;
    }
    if (change.newValue.length === 7) {
        // 这一定是格式正确的颜色代码！
        return change;
    }
    if (change.newValue.length > 10) disposer2(); // 不再拦截今后的任何变化
    throw new Error("This doesn't like a color at all: " + change.newValue);
});

theme.backgroundColor = '121212';
