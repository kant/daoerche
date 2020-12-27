/**
 * @title Leetcode: 461. 汉明距离
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    let binary = x ^ y;
    let count = 0;
    while (binary) {
        binary = binary & (binary - 1);
        count++;
    }
    return count;
};