/**
 * @title leetcode 112. 路径总和
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
    if (root === null) {
        return false;
    }

    if (root.left === null && root.right === null) {
        return sum - root.val === 0;
    }

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
