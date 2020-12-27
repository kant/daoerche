/**
 * @title Leetcode 2. 两数相加
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = p = new ListNode();

    let carry = 0;
    while (l1 || l2 || carry) {
        const val1 = l1 && l1.val || 0;
        const val2 = l2 && l2.val || 0;
        const val = val1 + val2 + carry;

        carry = Math.floor(val / 10);
        p.next = new ListNode(val % 10);
        p = p.next;

        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }

    return head.next;
};
