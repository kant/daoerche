/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title Leetcode: 671. 二叉树中第二小的节点
 * @param {TreeNode} root
 * @return {number}
 */
const findSecondMinimumValue = function(root) {
  let [min, secondMin] = [Infinity, Infinity];
  const traverse = node => {
    if (!node) return null;

    const left = traverse(node.left);
    const right = traverse(node.right);

    const curVal = (left && right && Math.min(left, right)) || node.val;
    if (curVal < min) {
      [min, secondMin] = [curVal, min];
    } else if (curVal === min) {
      min = curVal;
    } else if (curVal < secondMin) {
      secondMin = curVal;
    }
    return node.val;
  }
  traverse(root);
  return secondMin === Infinity ? -1 : secondMin;
};
