/**
 * @title leetcode 141. 环形链表
 * -----------------------------------
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let i = head;
    let j = head;

    while (i && i.next && j && j.next && j.next.next) {
        i = i.next;
        j = j.next.next;

        if (i === j) {
            return true;
        }
    }

    return false;
};
