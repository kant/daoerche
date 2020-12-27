/**
 * @title Leetcode: 448. 找到所有数组中消失的数字
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        nums[idx] = -Math.abs(nums[idx]);
    }

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
            continue;
        }
        // 顺带修改回原值
        nums[i] = -nums[i];
    }

    return res;
};

const input1 = [4,3,2,7,8,2,3,1];


console.log(findDisappearedNumbers(input1));
console.log(input1);