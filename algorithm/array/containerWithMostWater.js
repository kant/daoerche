/**
 * @title Leetcode: 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */

const input1 = [1,8,6,2,5,4,8,3,7];

// 一般遍历方法
const maxArea1 = function(input) {
    let maxArea = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            const width = j - i;
            const height = Math.min(input[i], input[j]);
            const curArea = width * height;

            maxArea = Math.max(maxArea, curArea);
        }
    }

    return maxArea;
};

// 双指针
const maxArea2 = function(input) {
    let maxArea = 0;

    let i = 0;
    let j = input.length - 1;
    while (i < j) {
        const width = j - i;
        const height = Math.min(input[i], input[j]);
        const curArea = width * height;

        maxArea = Math.max(maxArea, curArea);
        input[i] < input[j] ? i++ : j--;
    }

    return maxArea;
};

console.time('maxArea1');
console.log(maxArea1(input1));
console.timeEnd('maxArea1');

console.time('maxArea2');
console.log(maxArea2(input1));
console.timeEnd('maxArea2');
