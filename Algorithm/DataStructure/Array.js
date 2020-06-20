/**
 * leetcode 189. 旋转数组
 * -------------------------------------
 */
// 用一个临时变量存储，每次移动一位 空间复杂度满足O(1)
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        let temp = nums[nums.length - 1];
        for (let j = nums.length - 2; j >= 0; j--) {
            nums[j + 1] = nums[j];
        }
        nums[0] = temp;
    }

    return nums;
};

// 3次反转法 js内置api无法实现，需要自己写
// ……


/**
 * LeetCode
 * 155. 最小栈
 * -------------------------------------
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.stackMinHelp = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);

    if (this.getMin() === null || x <= this.getMin()) {
        this.stackMinHelp.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const topVal = this.stack.pop();

    if (this.getMin() !== null && topVal === this.getMin()) {
        this.stackMinHelp.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stackMinHelp.length ? this.stackMinHelp[this.stackMinHelp.length - 1] : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/**
 * 二分查找
 */
const binarySearch = (array, target) => {
    const len = array.length;
    let low = 0,
        high = len - 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const midVal = array[mid];

        if (midVal === target) return mid;
        if (midVal < target) low = mid + 1;
        if (midVal > target) high = mid - 1;
    }

    return -1;
}
