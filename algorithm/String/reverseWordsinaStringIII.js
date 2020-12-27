/**
 * @title Leetcode: 557. 反转字符串中的单词 III
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const words = s.split(' ');
    words.forEach((word, idx) => {
        words[idx] = word.split('').reverse().join('');
    });
    return words.join(' ');
};

const input = "Let's take LeetCode contest";
console.log(reverseWords(input));
