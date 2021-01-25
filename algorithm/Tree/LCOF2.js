/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 剑指 Offer 28. 对称的二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
 const traverse = (leftNode, rightNode) => {
  if (leftNode === null && rightNode === null) return true;
  if (!leftNode || !rightNode) return false;
  if (leftNode.val !== rightNode.val) return false;

  return traverse(leftNode.left, rightNode.right) && traverse(leftNode.right, rightNode.left);
 }

 if (!root) return true;
 return traverse(root.left, root.right);
};
