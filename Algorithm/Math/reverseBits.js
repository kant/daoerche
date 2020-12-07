/**
 * @title Leetcode: 190. 颠倒二进制位
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    let reverseNum = 0;
    let i = 32;
    while (i--) {
        reverseNum <<= 1;
        reverseNum += n & 1;
        n >>= 1;
    }

    // js通过无符号右移0位来实现32位无符号数
    return reverseNum >>> 0;
};

const input = 43261596;
console.log(reverseBits(input));
