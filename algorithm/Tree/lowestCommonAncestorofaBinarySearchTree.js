const {
    TreeNode,
    createBinaryTree,
    printTree
} = require('../utils/tree');

/**
 * @title Leetcode: 235. 二叉搜索树的最近公共祖先
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    const maxVal = Math.max(p.val, q.val);
    const minVal = Math.min(p.val, q.val);

    if ([maxVal, minVal].includes(root.val)) {
        return root;
    }

    if (maxVal < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (minVal > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};

const nodeArr = [6,2,8,0,4,7,9,null,null,3,5];
const root = createBinaryTree(...nodeArr);

console.log(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(8)));
console.log(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4)));
