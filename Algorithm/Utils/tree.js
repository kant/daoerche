/**
 * @title 构造树的工具函数
 */

// 树节点构造函数
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// 构造一颗完全二叉树
const createCompleteBinaryTree = (...nodeVals) => {
    const nodes = nodeVals.map(val => new TreeNode(val));
    for (let i = 0, len = nodes.length; i < len; i++) {
        const node = nodes[i];
        const leftNodeIdx = i * 2 + 1;
        const rightNodeIdx = i * 2 + 2;

        if (leftNodeIdx >= len) continue;
        node.left = nodes[leftNodeIdx];

        if (rightNodeIdx >= len) continue;
        node.right = nodes[rightNodeIdx];
    }

    return nodes[0] || null;
}

module.exports = {
    TreeNode,
    createCompleteBinaryTree
}