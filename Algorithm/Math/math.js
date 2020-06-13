/**
 * leetCode
 * 167. 两数之和 II - 输入有序数组
 */
/**
 * 非递归算法 杨氏矩阵
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let sum = numbers[i] + numbers[j];

    while (sum !== target) {
        sum < target ? i++ : j--;
        sum = numbers[i] + numbers[j];
    }

    return [i + 1, j + 1];
};


/**
 * leetCode
 * 172. 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }

    return count;
};


/**
 * leetCode
 * 169. 多数元素
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
