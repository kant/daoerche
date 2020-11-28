/**
 * @title leetcode 9. 回文数
 * -----------------------------------
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const originalNum = x;
    let newNum = 0;
    while(x) {
        newNum = (newNum * 10) + (x % 10);
        x = Math.floor(x/10);
    }

    return originalNum === newNum;
};
