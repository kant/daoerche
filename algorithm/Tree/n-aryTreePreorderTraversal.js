/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @title Leetcode: 589. N叉树的前序遍历
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function(root) {
    const result = [];

    const traverse = node => {
        if (!node) return;

        result.push(node.val);
        node.children.forEach(traverse);
    }
    traverse(root);

    return result;
};
