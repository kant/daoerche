/**
 * @title LeetCode: 283. 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    for (let lastNonZeroFoundAt = 0, i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt++] = nums[i];
            nums[i] = temp;
        }
    }
};

const input1 = [0,1,0,3,12];

console.log(input1);
moveZeroes(input1)
console.log(input1);