/**
 * @title Leetcode: 5. 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    const pb = new Array(len).fill(undefined).map(() => new Array(len).fill(false));

    let maxLenString = '';
    for (let l = 0; l < len; l++) {
        for (let i = 0; i < len; i++) {
            let j = i + l;
            if (j >= len) break;

            if (j - i === 0) {
                pb[i][j] = true;
            } else if (j - i === 1) {
                pb[i][j] = (s[i] === s[j]);
            } else if (j - i > 1) {
                pb[i][j] = pb[i + 1][j - 1] && s[i] === s[j];
            }

            if (pb[i][j] && (j - i + 1 > maxLenString.length)) {
                maxLenString = s.slice(i, j + 1);
            }
        }
    }

    return maxLenString;
};

longestPalindrome("babad");

