/**
 * @title leetcode 53. 最大子序和
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let tempMax = nums[0];
    for(let i = 1, len = nums.length; i < len; i++) {
        tempMax = Math.max(nums[i], tempMax + nums[i]);
        max = Math.max(max, tempMax);
    }

    return max;
};
