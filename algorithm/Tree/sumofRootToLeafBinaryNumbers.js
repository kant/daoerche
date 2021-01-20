/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title Leetcode: 1022. 从根到叶的二进制数之和
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = function(root) {
  const paths = [];
  const traverse = (node, binary) => {
    if (!node) return;

    if (!node.left && !node.right) {
      const b = binary + node.val;
      paths.push(b);
    }

    traverse(node.left, binary + node.val);
    traverse(node.right, binary + node.val);
  }

  traverse(root, '');
  return paths.reduce((acc, pre) => acc + parseInt(pre, 2) , 0);
};
