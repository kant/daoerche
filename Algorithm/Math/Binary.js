/**
 * @title: Leetcode 191. 位1的个数
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
    let res = 0;
    while (n) {
        res += n % 2;
        n >>>= 1;
    }
    return res;
};
