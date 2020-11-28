/**
 * @title 实现一个基本的Promise类
 * 感谢作者思路：
 * https://juejin.im/post/5b83cb5ae51d4538cc3ec354
 */

const isFunction = variable => typeof variable === 'function';

class MyPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('not a function!');
        }

        // 初始化状态和值
        this._status = MyPromise.PENDING;
        this._value = undefined;

        // 添加成功回调函数队列
        this._fulfilledQueues = [];
        // 添加失败回调函数队列
        this._rejectedQueues = [];

        try {
            // 执行用户的函数
            handle(this._resolve.bind(this), this._reject.bind(this));
        } catch (e) {
            this._reject(e);
        }
    }

    _resolve(val) {
        // 状态已经扭转过了就直接返回
        if (this._status !== MyPromise.PENDING) return;

        // 依次执行成功队列中的函数，并清空队列
        const run = () => {
            this._status = FULFILLED;
            this._value = val;

            let cb = this._rejectedQueues.shift();
            while (cb) {
                cb(val);
                cb = this._rejectedQueues.shift();
            }
        };
        // 这个其实也是加进promiseEnqueue微任务队列去执行的
        // 使用异步的方式是为了让当前注册的then方法都注册完再一次性扭转执行
        setTimeout(run, 0);
    }

    _reject(val) {
        // 状态已经扭转过了就直接返回
        if (this._status !== MyPromise.PENDING) return;

        // 依次执行成功队列中的函数，并清空队列
        const run = () => {
            this._status = FULFILLED;
            this._value = val;

            let cb = this._fulfilledQueues.shift();
            while (cb) {
                cb(val);
                cb = this._fulfilledQueues.shift();
            }
        };
        setTimeout(run, 0);
    }

    then(onFulfilled, onRejected) {
        const { _value, _status } = this;
        // 返回一个新的Promise对象
        return new MyPromise((onFulfilledNext, onRejectedNext) => {
            // 封装一个成功时执行的函数
            let fulfilled = value => {
                try {
                    if (!isFunction(onFulfilled)) {
                        onFulfilledNext(value)
                    } else {
                        let res = onFulfilled(value);
                        if (res instanceof MyPromise) {
                            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                            onFulfilledNext(res)
                        }
                    }
                } catch (err) {
                    // 如果函数执行出错，新的Promise对象的状态为失败
                    onRejectedNext(err)
                }
            };

            // 封装一个失败时执行的函数
            let rejected = error => {
                try {
                    if (!isFunction(onRejected)) {
                        onRejectedNext(error)
                    } else {
                        let res = onRejected(error);
                        if (res instanceof MyPromise) {
                            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                            onFulfilledNext(res)
                        }
                    }
                } catch (err) {
                    // 如果函数执行出错，新的Promise对象的状态为失败
                    onRejectedNext(err)
                }
            };
            switch (_status) {
                // 当状态为pending时，将then方法回调函数加入执行队列等待执行
                case MyPromise.PENDING:
                    this._fulfilledQueues.push(fulfilled);
                    this._rejectedQueues.push(rejected);
                    break;
                // 当状态已经改变时，立即执行对应的回调函数
                case MyPromise.FULFILLED:
                    // 这一步V8引擎实现是添加进PromiseEnqueue微任务队列去执行的
                    fulfilled(_value);
                    break;
                case MyPromise.REJECTED:
                    // 这一步V8引擎实现是添加进PromiseEnqueue微任务队列去执行的
                    rejected(_value);
                    break;
            }
        });
    }
}

MyPromise.all = function (list) {
    return new MyPromise((resolve, reject) => {
        const resList = [];
        let resolveCount = 0;

        for (let [i, p] of list.entries()) {
            p.then(val => {
                resList[i] = val;
                resolveCount++;

                if (resolveCount === list.length) {
                    resolve(resList);
                }
            }, err => {
                reject(err);
            })
        }
    });
}

MyPromise.race = function (list) {
    return new MyPromise((resolve, reject) => {
        for (let [i, p] of list.entries()) {
            p.then(val => {
                resolve(val);
            }, err => {
                reject(err);
            })
        }
    });
}

MyPromise.PENDING = 'PENDING';
MyPromise.FULFILLED = 'FULFILLED';
MyPromise.REJECTED = 'REJECTED';

let p = new MyPromise(() => { });
