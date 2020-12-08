/**
 * @title Leetcode: 202. 快乐数
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const appearOff = [];
    let t = n;
    while (true) {
        let res = 0;
        while (t) {
            const remainder = t % 10;
            t = Math.floor(t / 10);
            res += Math.pow(remainder, 2);
        }
        if (res === 1) {
            return true;
        }
        if (appearOff.includes(res)) {
            return false;
        }
        appearOff.push(res);
        t = res;
    }
};

const input = 2;
console.log(isHappy(input));
