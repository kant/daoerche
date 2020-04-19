class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    /**
     * 以完全二叉树的数组存储方式为输入：[3,9,20,null,null,15,7]
     * 结果转化为链表存储形式放入root属性中
     * @param {any} valArray 
     */
    constructor(valArray) {
        this.root = this.createLinkTreeForArrTree(valArray, valArray.length, 0);
    }

    /**
     * 将完全二叉树的数组形式转换为链表形式
     * @param {any[]} arr 
     * @param {number} len 
     * @param {number} i 
     */
    createLinkTreeForArrTree(arr, len, i) {
        // null 和 undefined的情况都视为无节点, 即不再递归, 所以这里判断用 !=
        if (i < len && arr[i] != null) {
            const node = {};

            node.val = arr[i];
            node.left = this.createLinkTreeForArrTree(arr, len, 2 * i + 1);
            node.right = this.createLinkTreeForArrTree(arr, len, 2 * i + 2);

            return node;
        }

        return null;
    }

    /**
     * 返回这个树的最大深度 (根节点到叶子节点的深度)
     * @param {Node} root 
     */
    maxDepth(root) {
        if (!root) return 0;

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }

    /**
     * 返回这个树的最小深度 (根节点到叶子节点的深度)
     * @param {Node} root 
     */
    minDepth(root) {
        if (!root) return 0;

        if (root.left && !root.right)
            return 1 + this.minDepth(root.left);
        if (root.right && !root.left)
            return 1 + this.minDepth(root.right);

        return 1 + Math.min(this.minDepth(root.left), this.minDepth(root.right));
    }
}


/**
 * Create Tree
 */
const treeArray = [3, 9, 20, null, null, 15, 7];
const tree = new Tree(treeArray);


/**
 * Methods Test
 */
const maxDepth = tree.maxDepth(tree.root);
const minDepth = tree.minDepth(tree.root);


/**
 * Check result
 */
console.log(minDepth);