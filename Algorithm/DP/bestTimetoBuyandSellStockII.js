/**
 * @title Leetcode: 122. 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法
const maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        profit += prices[i] > prices[i - 1] ? prices[i] - prices[i - 1] : 0
    }
    return profit;
};

// 动态规划
const maxProfit2 = function(prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
    dp[0][0] = 0, dp[0][1] = -prices[0];
    for (let i = 1; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};

const input = [7,1,5,3,6,4];
console.log(maxProfit2(input));
