const {
    TreeNode,
    createBinaryTree,
    printTree
} = require('../Utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 257. 二叉树的所有路径
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    const paths = [];
    const path = [];
    const traverse = (root) => {
        if (!root) return;

        // 推入当前节点val
        path.push(root.val);
        // 当前为定义的子节点，统计路径
        if (!root.left && !root.right) {
            paths.push(path.join('->'));
        }

        traverse(root.left);
        traverse(root.right);

        path.pop();
    }
    traverse(root);
    return paths;
};

const input = [1, 2, 3, null, 5];
const root = createBinaryTree(...input);
printTree(root);
console.log(binaryTreePaths(root));
