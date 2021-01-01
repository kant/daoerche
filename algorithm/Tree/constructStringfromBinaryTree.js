/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 606. 根据二叉树创建字符串
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function(t) {
    let result = '';
    const traverse = node => {
        if (!node) return;

        result += node.val;

        if (!node.right && !node.left) return;
        result += '(';
        traverse(node.left);
        result += ')';

        if (!node.right) return;
        result += '(';
        traverse(node.right);
        result += ')';
    }
    traverse(t);
    return result;
};
