/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 剑指 Offer 32 - II. 从上到下打印二叉树 II
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const temp = [];
    for (let i = 0, len = stack.length; i < len; i++) {
      const item = stack.shift();
      temp.push(item.val);

      if (item.left) stack.push(item.left);
      if (item.right) stack.push(item.right);
    }
    result.push(temp);
  }

  return result;
};
