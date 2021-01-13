/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title Leetcode: 872. 叶子相似的树
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  let leafResult1 = [];
  let leafResult2 = [];

  const traverse = (node, leafs) => {
    if (!node) return;
    traverse(node.left, leafs);
    traverse(node.right, leafs);
    if (!node.left && !node.right) leafs.push(node.val);
  }

  traverse(root1, leafResult1);
  traverse(root2, leafResult2);
  return leafResult1.join('-') === leafResult2.join('-');
};

const leafSimilar2 = function(root1, root2) {
  const traverse = node => {
    if (!node) return '';
    if (!node.left && !node.right) return node.val + '-';

    return traverse(node.left) + traverse(node.right);
  }

  const s1 = traverse(root1);
  const s2 = traverse(root2);
  return s1 === s2;
};
