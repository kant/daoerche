/**
 * @title Leetcode: 204. 计数质数
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    const isPrimes = (num) => {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (isPrimes(i)) sum++;
    }
    return sum;
};

const input = 10;
console.log(countPrimes(input));
