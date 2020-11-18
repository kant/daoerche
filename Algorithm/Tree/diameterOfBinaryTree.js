/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 543. 二叉树的直径
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    let stack = [root];
    while(stack.length > 0) {
        const node = stack.pop();
        if (node) {
            const leftHeight = recursion(node.left);
            const rightHeight = recursion(node.right);
            maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

            stack.push(node.left);
            stack.push(node.right);
        }
    }

    return maxDiameter;
};

const recursion = (root) => {
    if (!root) return 0;

    return 1 + Math.max(recursion(root.left), recursion(root.right));
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

const root = node1;
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node5.right = node6;

console.log(diameterOfBinaryTree(root));