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
 * @title Leetcode: 572. 另一个树的子树
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function(s, t) {
  const isSameTree = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;

    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
  }

  const isSubTree = (a, b) => {
    if (!a && b) return false;

    return isSameTree(a, b) || isSubtree(a.left, b) || isSubtree(a.right, b);
  }

  return isSubTree(s, t);
};

const s = [3, 4, 5, 1, 2];
const t = [4, 1, 2];
const rootS = createBinaryTree(...s);
const rootT = createBinaryTree(...t);
console.log(isSubtree(rootS, rootT));
