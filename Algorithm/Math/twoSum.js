/**
 * @title leetcode 1. 两数之和
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let result = [];
    nums.forEach((num, i) => {
        let needNum = target - num;
        if (typeof hash[needNum] == 'number') {
            result[0] = hash[needNum];
            result[1] = i;
        } else {
            hash[num] = i;
        }
    });
    return result;
};
