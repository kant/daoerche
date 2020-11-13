import React from 'react';
import './App.css';
import {observable, action, autorun, computed, extendObservable, reaction, when, trace} from 'mobx';
import { observer } from "mobx-react";

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

const message = observable({
    author: {
        name: 'daoer'
    }
})
// const disposer = autorun(() => {
//     console.log(message.title)
//     trace()
// })
//
// message.title = "Hello"

const author = message.author;
autorun(() => {
    console.log(author.name)
})
message.author.name = "Sara";
message.author = { name: "John" };


