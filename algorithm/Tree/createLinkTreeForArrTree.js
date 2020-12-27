/**
 * @title 将完全二叉树的数组形式转换为链表形式
 * @param {any[]} arr
 * @param {number} len
 * @param {number} i
 */
const createLinkTreeForArrTree = (arr, len, i) => {
    // null 和 undefined的情况都视为无节点, 即不再递归, 所以这里判断用 !=
    if (i < len && arr[i] != null) {
        const node = {};

        node.val = arr[i];
        node.left = createLinkTreeForArrTree(arr, len, 2 * i + 1);
        node.right = createLinkTreeForArrTree(arr, len, 2 * i + 2);

        return node;
    }

    return null;
}
