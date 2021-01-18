/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 剑指 Offer 27. 二叉树的镜像
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const mirrorTree = function(root) {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};
