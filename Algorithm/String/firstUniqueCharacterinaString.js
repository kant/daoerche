/**
 * @title Leetcode: 387. 字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const charArr = Array.from({length: 26}, () => 0);
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        charArr[c.charCodeAt(0) - 97] += 1;
    }

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (charArr[c.charCodeAt(0) - 97] === 1) return i;
    }

    return -1;
};

const s = "loveleetcode";
console.log(firstUniqChar(s));
