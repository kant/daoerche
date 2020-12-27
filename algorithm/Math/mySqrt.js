/**
 * @title leetcode 69. x 的平方根
 * -----------------------------------
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    while(right - left >= 0.01) {
        const m = (right + left) / 2;
        x / m < m ? right = m : left = m;
    }

    return left;
};
