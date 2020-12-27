/**
 * @title LeetCode 155. 最小栈
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
