/**
 * @title Leetcode: 326. 3的幂
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    if (n === 0) return false;

    while (n !== 1) {
        if (n % 3 !== 0) return false;
        n /= 3;
    }
    return true;
};
