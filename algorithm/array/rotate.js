/**
 * @title leetcode 189. 旋转数组
 * -------------------------------------
 */
// 用一个临时变量存储，每次移动一位 空间复杂度满足O(1)
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        let temp = nums[nums.length - 1];
        for (let j = nums.length - 2; j >= 0; j--) {
            nums[j + 1] = nums[j];
        }
        nums[0] = temp;
    }

    return nums;
};
