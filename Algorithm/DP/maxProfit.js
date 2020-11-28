/**
 * @title Leetcode 121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }

    return maxProfit;
};
