/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title Leetcode: 110. 平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  let isBalance = true;
  const traverse = node => {
    if (!node) return 0;

    const leftHight = traverse(node.left);
    const rightHight = traverse(node.right);

    if (Math.abs(leftHight - rightHight) > 1) isBalance = false;
    return Math.max(leftHight, rightHight) + 1;
  }

  traverse(root);
  return isBalance;
};
