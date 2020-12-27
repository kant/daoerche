/**
 * @title 构造链表的工具函数
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const createLinkList = (...vals) => {
    return vals.map(val => new ListNode(val)).reduceRight((pre, cur) => {
        cur.next = pre;
        return cur;
    })
}

module.exports = {
    ListNode,
    createLinkList
}
