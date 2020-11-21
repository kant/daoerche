/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @title Leetcode: 147. 对链表进行插入排序
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function(head) {
    if (!head) return null;

    const emptyNode = new ListNode('');
    emptyNode.next = head;

    let p = emptyNode.next;
    while (p.next) {
        let cur = emptyNode;
        while (cur.next !== p.next && p.next.val > cur.next.val) {
            cur = cur.next;
        }

        if (cur.next === p.next) {
            p = p.next;
            continue;
        }

        let t = p.next;
        p.next = p.next.next;
        t.next = cur.next;
        cur.next = t;
    }

    return emptyNode.next;
};


const insertionSortList2 = function(head) {
    if (!head) return null;

    const dummyHead = new ListNode('');
    dummyHead.next = head;

    let lastSorted = dummyHead.next;
    let cur = lastSorted.next;
    while (cur) {
        if (cur.val >= lastSorted.val) {
            lastSorted = lastSorted.next;
            cur = lastSorted.next;
            continue;
        }

        let p = dummyHead;
        while (cur.val >= p.next.val) {
            p = p.next;
        }

        const q = cur.next;
        cur.next = p.next;
        p.next = cur;
        lastSorted.next = q;
        cur = lastSorted.next;
    }

    return dummyHead.next;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(3);
const node3 = new ListNode(5);
const node4 = new ListNode(2);
const node5 = new ListNode(4);

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

printLink(head);
printLink(insertionSortList2(head));