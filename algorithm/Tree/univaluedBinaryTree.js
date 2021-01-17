/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 965. 单值二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = function(root) {
  if (!root) return true;
  if (root.left && root.left.val !== root.val || root.right && root.right.val !== root.val) return false;

  return isUnivalTree(root.left) && isUnivalTree(root.right);
};
