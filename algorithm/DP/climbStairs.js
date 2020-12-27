/**
 * @title leetcode 70. 爬楼梯
 * -----------------------------------
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const resultList = [];
    resultList[0] = 1;
    resultList[1] = 1;

    for(let i = 2; i <= n; i++) {
        resultList[i] = resultList[i - 1] + resultList[i - 2];
    }

    return resultList[n];
};
