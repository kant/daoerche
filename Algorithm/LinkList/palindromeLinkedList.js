const reverseList = require('./reverseLinkedList');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @title Leetcode: 234. 回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome1 = function(head) {
    let p = head;
    const stack = [];

    while(p) {
        stack.push(p.val);
        p = p.next;
    }

    let i = 0;
    let j = stack.length - 1;
    while (i < j) {
        if (stack[i] !== stack[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};


const isPalindrome2 = function(head) {
    if (!head || !head.next) return true;

    let mid = head;
    let p = head.next;

    // 快慢指针找到中点
    while (p.next && p.next.next) {
        mid = mid.next;
        p = p.next.next;
    }

    // 如果是奇数，中点再往前走一个
    if (p.next) {
        mid = mid.next;
    }

    const revertBehindLink = reverseList(mid.next);
    let q = revertBehindLink;
    p = head;
    while (q) {
        if (q.val !== p.val) {
            // 复原链表
            const originalBehindLink = reverseList(revertBehindLink);
            mid.next = originalBehindLink;
            return false;
        }
        p = p.next;
        q = q.next;
    }

    // 复原链表
    const originalBehindLink = reverseList(revertBehindLink);
    mid.next = originalBehindLink;
    return true;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(2);
const node5 = new ListNode(1);

const head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log('is palindrome?', isPalindrome1(head));
console.log(head);
console.log('is palindrome?', isPalindrome2(head));
console.log(head);