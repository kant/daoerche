/**
 * @title Leetcode: 746. 使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    const dp = new Array(cost.length).fill(0);
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i <= cost.length; i++) {
        const may1 = dp[i - 2] + cost[i - 2];
        const may2 = dp[i - 1] + cost[i - 1];
        dp[i] = Math.min(may1, may2);
    }

    return dp[cost.length];
};

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
