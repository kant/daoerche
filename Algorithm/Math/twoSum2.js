/**
 * @title leetCode 167. 两数之和 II - 输入有序数组
 * -----------------------------------
 */
/**
 * 非递归算法 杨氏矩阵
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let sum = numbers[i] + numbers[j];

    while (sum !== target) {
        sum < target ? i++ : j--;
        sum = numbers[i] + numbers[j];
    }

    return [i + 1, j + 1];
};
