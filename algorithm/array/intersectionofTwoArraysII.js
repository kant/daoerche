/**
 * @title Leetcode: 350. 两个数组的交集 II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const numMap = {};
    nums1.forEach(val => {
        if (!numMap[val]) {
            numMap[val] = 0;
        }

        numMap[val] += 1;
    });

    const result = [];
    nums2.forEach(val => {
        if (numMap[val]) {
            result.push(val);
            numMap[val] -= 1;
        }
    });
    return result;
};

const nums1 = [4,9,9,5];
const nums2 = [9,4,9,8,4]
console.log(intersect(nums1, nums2));
