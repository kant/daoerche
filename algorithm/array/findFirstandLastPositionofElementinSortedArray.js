/**
 * @title Leetcode: 34. 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    const res = [-1, -1];
    const len = nums.length;
    let [low, hight] = [0, len - 1];
    // 先找右边界
    while (low < hight) {
        const mid = Math.floor((low + hight) / 2);
        if (target >= nums[mid]) {
            low = mid + 1;
        } else {
            hight = mid - 1;
        }
    }
    if (nums[low] === target || low - 1 >= 0 && nums[low - 1] === target) {
        res[1] = nums[low] === target ? low : low - 1;
    }

    [low, hight] = [0, len - 1];
    // 找出左边界
    while (low < hight) {
        const mid = Math.floor((low + hight) / 2);
        if (target <= nums[mid]) {
            hight = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (nums[low] === target || low + 1 < len && nums[low + 1] === target) {
        res[0] = nums[low] === target ? low : low + 1;
    }

    return res;
};

const nums = [5,7,7,8,8,10];
const target = 8;

console.log(searchRange(nums, target))
