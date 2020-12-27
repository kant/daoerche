const {
    TreeNode,
    createBinaryTree,
    printTree
} = require('../utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 530. 二叉搜索树的最小绝对差
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = function(root) {
    let [last, min] = [undefined, Infinity];

    const traverse = (node) => {
        if (!node) return;

        traverse(node.left);
        const val = node.val;
        if (last ===  undefined) {
            last = val;
        } else {
            min = Math.min(min, val - last);
            last = val;
        }
        traverse(node.right);
    }
    traverse(root);

    return min;
};

const input = [1, null, 3, null, null, 2];
const root = createBinaryTree(...input);
console.log(getMinimumDifference(root));
