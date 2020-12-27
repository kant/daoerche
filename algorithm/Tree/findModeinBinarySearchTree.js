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
 * @title Leetcode: 501. 二叉搜索树中的众数
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function(root) {
    if (!root) return [];

    let result = [];
    let [cur, count, max] = [undefined, 0, 0];
    // 中序遍历 = 递增数组
    const traverse = (node) => {
        if (!node) return;

        traverse(node.left);
        // do something
        const val = node.val;
        if (typeof cur === "undefined") {
            // 刚开始
            cur = val;
            count++;
        } else if(cur === val) {
            // 和前一个一样
            count++;
        } else {
            // 和前一个不一样了
            if (count > max) {
                // 发现新的众数
                result = [cur];
                max = count;
            } else if (count === max) {
                // 和当前最大的一样
                result.push(cur);
            }

            // 重置变量
            cur = val;
            count = 1;
        }

        traverse(node.right);
    }

    traverse(root);
    if (count > max) {
        // 发现新的众数
        result = [cur];
        max = count;
    } else if (count === max) {
        // 和当前最大的一样
        result.push(cur);
    }

    return result;
};

const input = [1, null, 2, null, null, 2];
const root = createBinaryTree(...input);
console.log(findMode(root));
