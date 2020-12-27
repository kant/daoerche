const { TreeNode, printTree } = require('../utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 108. 将有序数组转换为二叉搜索树
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    const point = Math.floor((nums.length - 1) / 2);
    const leftNums = nums.slice(0, point);
    const rightNums = nums.slice(point + 1);

    const root = new TreeNode(nums[point]);
    root.left = sortedArrayToBST(leftNums);
    root.right = sortedArrayToBST(rightNums);

    return root;
};

const input = [-20, -10,-3, -1, 0, 2, 5, 9, 13];
printTree(sortedArrayToBST(input));
