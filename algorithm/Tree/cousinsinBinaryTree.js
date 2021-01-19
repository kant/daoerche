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
 * @title Leetcode: 993. 二叉树的堂兄弟节点
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function(root, x, y) {
  const queue = [root];
  while (queue.length) {
    let flag = 0;
    for (let i = 0, len = queue.length; i < len; i++) {
      const node = queue.shift();
      if (!node) continue;

      if ([x, y].includes(node.left && node.left.val) || [x, y].includes(node.right && node.right.val)) {
        flag++;
      }

      queue.push(node.left);
      queue.push(node.right);
    }
    if (flag >= 2) return true;
  }

  return false;
};

const root = createBinaryTree(...[1,2,3,null,4,null,5])
printTree(root);
isCousins(root, 4, 5);
