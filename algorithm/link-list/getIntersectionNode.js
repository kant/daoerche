/**
 * @title LeetCode 160. 相交链表
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
