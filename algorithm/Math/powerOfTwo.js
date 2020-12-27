/**
 * @title Leetcode: 231. 2的幂
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    if (n < 1) return false;

    let r = n;
    while (r > 1) {
        if (r % 2 !== 0) return false;
        r /= 2;
    }

    return true;
};

// n & (-n) === n
const isPowerOfTwo2 = function(n) {
    if (n < 1) return false;
    return (n & -n) === n;
};

// n & (n - 1) === 0
const isPowerOfTwo3 = function(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo2(16))
console.log(isPowerOfTwo3(16))