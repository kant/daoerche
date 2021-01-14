const {
  TreeNode,
  createBinaryTree,
  printTree
} = require('../utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title Leetcode: 897. 递增顺序查找树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = function(root) {
  const head = new TreeNode(0);
  let pre = head;
  const traverse = node => {
    if (!node) return;

    traverse(node.left);
    node.left = null;
    pre.right = node;
    pre = node;
    traverse(node.right);
  }
  traverse(root);
  return head.right;
};
