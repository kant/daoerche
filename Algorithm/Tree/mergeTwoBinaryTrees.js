/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 617. 合并二叉树
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = function(t1, t2) {
    if (!t1) {
        return t2;
    }

    if (!t2) {
        return t1;
    }

    const node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);

    return node;
};

// 不修改原有节点操作
const mergeTrees2 = function(t1, t2) {
    if (!t1 && !t2) return null;

    const node = new TreeNode((t1 && t1.val || 0) + (t2 && t2.val || 0));
    node.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    node.right = mergeTrees(t1 && t1.right, t2 && t2.right);

    return node;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);

const root1 = node1;
node1.left = node2;
node1.right = node3;
node2.left = node4;

const node11 = new TreeNode(2);
const node22 = new TreeNode(3);
const node33 = new TreeNode(6);
const node44 = new TreeNode(1);
const node55 = new TreeNode(9);

const root2 = node11;
node11.left = node22;
node11.right = node33;
node22.left = node44;
node22.right = node55;

console.log(mergeTrees2(root1, root2));