/**
 * @title 返回这个树的最小深度 (根节点到叶子节点的深度)
 * @param {Node} root
 */
const minDepth = (root) => {
    if (!root) return 0;

    if (root.left && !root.right)
        return 1 + minDepth(root.left);
    if (root.right && !root.left)
        return 1 + minDepth(root.right);

    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
