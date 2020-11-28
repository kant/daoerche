const { createLinkList, ListNode } = require('../Utils/linkList');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @title Leetcode: 237. 删除链表中的节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
    let p = node;
    while (p.next) {
        p.val = p.next.val;

        if (!p.next.next) {
            p.next = null;
            return;
        }
        p = p.next;
    }
};

const head = createLinkList(1, 2, 3, 4, 5, 6);
const node = head.next.next.next;
deleteNode(node);
console.log(head);

