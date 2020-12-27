/**
 * @title Leetcode: 412. Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    return Array.from({length: n}, (v, k) => {
        const i = k + 1;
        if (i % 3 === 0 && i % 5 === 0) {
            return 'FizzBuzz';
        } else if (i % 3 === 0) {
            return 'Fizz';
        } else if (i % 5 === 0) {
            return 'Buzz';
        }

        return String(i);
    });
};

const n = 15;
console.log(fizzBuzz(n));
