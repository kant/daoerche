/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @title Leetcode: 19. 删除链表的倒数第N个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    // 创造一个有头结点的列表
    const emptyHead = new ListNode(0);
    emptyHead.next = head;
    let diff = n + 1;
    let i = emptyHead;
    let j = emptyHead;

    // 初始化快慢指针应该指向的位置
    while (diff > 0) {
        j = j.next;
        diff--;
    }

    // 现在i指向的就是要删除的节点的前一个位置
    while (j) {
        j = j.next;
        i = i.next;
    }

    i.next = i.next.next;
    return emptyHead.next;
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

printLink(head)
printLink(removeNthFromEnd(head,4));
