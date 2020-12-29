/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @title Leetcode: 559. N 叉树的最大深度
 * @param {Node} root
 * @return {number}
 */
const maxDepth = function(root) {
    if (!root) return 0;

    let deep = 0;
    const queue = [root];
    while (queue.length) {
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue.shift();
            node.children.forEach(node => queue.push(node));
        }
        deep++;
    }

    return deep;
};

// TODO: 可以再用递归写一遍
// 递归写法
const maxDepth2 = function(root) {
    if (!root) return 0;

    let deep = 0;
    root.children.forEach(node => {
        deep = Math.max(deep, maxDepth(node));
    });

    return deep + 1;
};
