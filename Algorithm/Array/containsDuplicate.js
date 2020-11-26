/**
 * @title Leetcode: 217. 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    if (nums.length <= 1) return false;

    nums.sort((a, b) => a - b);
    let lastNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (lastNum === nums[i]) {
            return true;
        }
        lastNum = nums[i];
    }
    return false;
};

const nums1 = [1,1,1,3,3,4,3,2,4,2];
const nums2 = [1,2,3,4];

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));