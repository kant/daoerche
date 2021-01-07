/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 637. 二叉树的层平均值
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  while (queue.length) {
    let [sum, len] = [0, queue.length];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      sum += node.val;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(sum / len);
  }

  return result;
};
