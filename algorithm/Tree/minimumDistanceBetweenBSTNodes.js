/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 783. 二叉搜索树节点最小距离
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function(root) {
  let [min, last] = [Infinity, undefined];
  const traverse = node => {
    if (!node) return;

    traverse(node.left);
    const val = node.val;
    if (last) {
      const diff = Math.abs(val - last);
      min = Math.min(min, diff);
    }
    last = val;
    traverse(node.right);
  }
  traverse(root);
  return min;
};
