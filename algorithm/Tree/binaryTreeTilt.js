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
 * @title Leetcode: 563. 二叉树的坡度
 * @param {TreeNode} root
 * @return {number}
 */
// 擦 我这写的什么傻屌玩意，写的这么复杂
const findTilt = function(root) {
    const traverseSum = node => {
        if (!node) return 0;
        return node.val + traverseSum(node.left) + traverseSum(node.right);
    }

    const calculateTilt = node => {
        if (!node) return 0;
        return Math.abs(traverseSum(node.left) - traverseSum(node.right));
    }

    const traverseAllTilt = node => {
        if (!node) return 0;
        return calculateTilt(node) + traverseAllTilt(node.left) + traverseAllTilt(node.right);
    }

    return traverseAllTilt(root);
};

// 重新使用后序遍历来写
const findTilt2 = function(root) {
    let tilt = 0;

    const traverse = node => {
        if (!node) return 0;

        const left = traverse(node.left);
        const right = traverse(node.right);

        tilt += Math.abs(left - right);
        return left + right + node.val;
    }

    traverse(root);
    return tilt;
};

const input = [4,2,9,3,5,null,7];
const root = createBinaryTree(...input);
console.log(findTilt(root));
