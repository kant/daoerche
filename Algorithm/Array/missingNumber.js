/**
 * @title Leetcode: 268. 丢失的数字
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const len = nums.length;
    // 打上标记
    for (let i = 0; i < len; i++) {
        const val = Math.abs(nums[i]);
        if (val < len) {
            nums[val] = -nums[val];
        }
    }

    for (let i = 0; i < len; i++) {
        const val = nums[i];
        // 通过1 / val 来判断val是否为负数，这样可以把-0的情况也包括进去，没有被标记过，说明该下标即为所找
        if (1 / val > 0) {
            return i;
        }
    }

    // 遍历完都没找到，说明最后一个为所找
    return len;
};

// 通过异或性质来找
const missingNumber2 = function(nums) {
    let res = 0;
    nums.forEach((val, idx) => {
        res = res ^ val ^ idx;
    });
    return res ^ nums.length;
};

const input = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber2(input));
