/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 700. 二叉搜索树中的搜索
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
};
