/**
 * LeetCode
 * 160. 相交链表
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA;
};
// 我想的另一种解法，感觉这样比较好理解~
var getIntersectionNode2 = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    let swapCount = 3;

    while (pA && pB && swapCount) {
        if (pA == pB) return pA;

        pA = pA.next || (swapCount-- && headB);
        pB = pB.next || (swapCount-- && headA);
    }

    return null;
};


/**
 * leetcode
 * 141. 环形链表
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


/**
 * leetcode
 * 21. 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let resultListNode = new ListNode('');
    let p = resultListNode;

    while(l1 && l2) {
        let connnectNode = null;
        if (l1.val <= l2.val) {
            connnectNode = l1;
            l1 = l1.next;
        } else {
            connnectNode = l2;
            l2 = l2.next;
        }

        p.next = new ListNode(connnectNode.val);
        p = p.next;
    }

    p.next = l1 || l2;
    return resultListNode.next;
};


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
