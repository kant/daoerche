/**
 * @title 浏览器Event Loop测试
 * 在microtasks中不断插入task，使得本次eventLoop无法结束
 */
console.log('Main task1');

const createMicrotask = (runTime) => {
    let promiseStartTime = Number(new Date());
    let promiseCount = 0;

    const createPromise = () => {
        new Promise(res => {
            console.log('Promise task');
            res();
        }).then(() => {
            console.log('Microtask promise', promiseCount);
            promiseCount++;

            if (Number(new Date()) - promiseStartTime < runTime) {
                createPromise();
            }
        });
    };

    createPromise();
};

createMicrotask(5);

console.log('Main task2');

setTimeout(() => {
    console.log('Macrotask start1');
}, 0);

setTimeout(() => {
    console.log('Macrotask start2');

    createMicrotask(100);
}, 10);

setTimeout(() => {
    console.log('Macrotask start3');
},  50);

setTimeout(() => {
    console.log('Macrotask start4');
}, 100);

console.log('Main task3');
