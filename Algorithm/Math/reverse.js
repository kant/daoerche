/**
 * @title leetcode 7. 整数反转
 * -----------------------------------
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX_NUM = 2147483647;
    const MIN_NUM = -2147483648;

    let result = 0;
    while(x) {
        result = result * 10 + x % 10;
        x = Math.trunc(x / 10);
    }

    return result > MAX_NUM || result < MIN_NUM ? 0 : result;
};
