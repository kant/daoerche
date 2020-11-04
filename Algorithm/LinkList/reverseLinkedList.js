/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @title Leetcode: 206. 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
const reverseList1 = function(head) {
    let p = head;
    let q = null;

    while (p) {
        let r = p;
        p = p.next;

        r.next = q;
        q = r;
    }

    return q;
};

// 递归
const reverseList2 = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let p = reverseList2(head.next);
    head.next.next = head;
    head.next = null;

    return p;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

const head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const printLink = (head) => {
    console.log('Link:');

    const separator = ' ';
    let output = '';
    let p = head;

    while(p) {
        const val = p.val;
        output += `${val}${separator}`;
        p = p.next;
    }

    console.log(output);
}

console.log('original');
printLink(head);

const reverseHead = reverseList2(head);

console.log('reverse');
printLink(reverseHead);
