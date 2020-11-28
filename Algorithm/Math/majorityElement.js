/**
 * @title leetCode 169. 多数元素
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num = nums[0];
    let count = 1;

    for (let i = 1, len = nums.length; i < len; i++) {
        const curNum = nums[i];
        if (num === curNum) {
            count++;
        } else {
            if (count >= 1) {
                count--;
            } else {
                num = curNum;
                count = 1;
            }
        }
    }

    return num;
};
