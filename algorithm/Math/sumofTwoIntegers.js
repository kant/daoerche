/**
 * @title Leetcode: 371. 两整数之和
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * 无进位相加结果 = a ^ b
 * 进位数值 = a & b << 1
 */
// 递归
const getSum = function(a, b) {
    const c = (a ^ b);
    // >>> 0 为了转成无符号数方便 有符号左移 不出错
    const carry = (((a & b) >>> 0) << 1);

    if (carry) {
        return getSum(c, carry);
    }
    return c;
};

// 迭代
const getSum2 = function(a, b) {
    [a, b] = [(a ^ b), (((a & b) >>> 0) << 1)]
    while (b) {
        [a, b] = [(a ^ b), (((a & b) >>> 0) << 1)]
    }
    return a;
};

console.log(getSum2(1, -4));
