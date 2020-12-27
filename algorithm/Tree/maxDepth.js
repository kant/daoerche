/**
 * @title 返回这个树的最大深度 (根节点到叶子节点的深度)
 * @param {Node} root
 */
const maxDepth = (root) => {
    if (!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
