const { TreeNode, createCompleteBinaryTree } = require('../utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 222. 完全二叉树的节点个数
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function(root) {
    if (!root) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
};

// TODO: 后面可以用二分法重写该题

const root = createCompleteBinaryTree(1, 2, 3, 4, 5, 6);
console.log(countNodes(root));
