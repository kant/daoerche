/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title Leetcode: 653. 两数之和 IV - 输入 BST
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
  const map = {};
  let find = false;
  const traverse = node => {
    if (!node) return;

    traverse(node.left);
    const expectNum = k - node.val;
    if (map[expectNum]) find = true;
    else map[node.val] = true;
    traverse(node.right);
  }

  traverse(root);
  return find;
};
