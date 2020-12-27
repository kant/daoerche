/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 226. 翻转二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
    if (!root) return null;

    const left = root.left;
    const right = root.right;
    root.left = invertTree(right);
    root.right = invertTree(left);
    return root;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

const root = node1;
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log('original', root);
console.log('invert', invertTree(root));
