/**
 * @title Leetcode: 344. 反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    let [i, j] = [0, s.length - 1];
    while (i < j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        i++;
        j--;
    }
};

const input = ["h","e","l","l","o"];
console.log(input);
reverseString(input);
console.log(input);
