/**
 * @title 创建一个闭包
 * @returns {function(): void}
 */
const createClosure = function () {
    const closureName = 'daoerche';

    return function () {
        console.log(closureName);
    };
};

const closure = createClosure();
closure();

// ReferenceError: closureName is not defined
// console.log(closureName);
