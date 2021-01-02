/*
 * @title 瞎几把临时测试文件
 */

// const fetch = (url, timeout) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//
//     let now = new Date().getTime();
//     let res = xhr.send()
//
//     return new Promise((res, rej) => {
//         const checkTimeout = () => {
//             if (new Date().getTime() - now < timeout) {
//                 requestAnimationFrame(checkTimeout);
//             }
//
//             rej(new Error('timeout!'));
//         }
//
//         requestAnimationFrame(checkTimeout);
//         res(res);
//     })
// }
//
//
// const sleep = time => {
//     const now = new Date().getTime();
//
//     while (new Date().getTime() - now < time) { }
// }
//
// const a = showArr => {
//     let res = [];
//
//     for (let i = showArr.length - 1; i >= 0; i--) {
//         let cur = showArr[i];
//
//
//         res.unshift(cur);
//
//         if (i > 0) {
//             let last = res.pop();
//             res.unshift(last);
//         }
//     }
//
//     return res;
// }

// console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));




// console.log(snakeTraverse())

// const compose = (...rest) => {
//     return (arg) => rest.reverse().reduce((acc, cur) => cur(acc), arg)
// }
//
// const f1 = num => num + 1;
// const f2 = num => num * 2;
// const f = compose(f2, f1);
// console.log(f(3));

function * generator() {
        let count = 0;
        while (count < 100) {
            count = yield count + 10;
            if (count === 32) {
                throw new Error('get Error');
            }
            count++;
        }
}

const g = generator();
let result = g.next();
while (!result.done) {
    try {
        console.log('wrap', result.value, result.done);
        if (result.value !== 6) {
            result = g.next(result.value);
        } else {
            g.throw(new Error('val already to 6'));
            break;
        }
    } catch (e) {
        console.log('wrap get error', e.message);
    }
}
