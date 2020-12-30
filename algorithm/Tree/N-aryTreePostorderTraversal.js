/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @title Leetcode: 590. N叉树的后序遍历
 * @param {Node} root
 * @return {number[]}
 */
const postorder = function(root) {
    const result = [];

    const traverse = node => {
        if (!node) return;

        node.children.forEach(traverse);
        result.push(node.val);
    }
    traverse(root);

    return result;
};
