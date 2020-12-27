const {
    TreeNode,
    createBinaryTree,
    printTree
} = require('../utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 404. 左叶子之和
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
    const traverse = (node, isLeft) => {
        if (!node) return 0;

        // 叶子节点
        if (!node.left && !node.right) {
            return isLeft ? node.val : 0;
        }

        return traverse(node.left, true) + traverse(node.right, false);
    }

    return traverse(root, false);
};

const input = [3, 9, 20, null, null, 15, 7];
const root = createBinaryTree(...input);
console.log(sumOfLeftLeaves(root));
