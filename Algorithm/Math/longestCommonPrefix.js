/**
 * @title leetcode 14. 最长公共前缀
 * -----------------------------------
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstWord = strs[0];
    const otherWords = strs.splice(1);
    if (!firstWord) return '';

    let result = '';
    for(let i = 0, len = firstWord.length; i < len; i++) {
        if (otherWords.every(word => word[i] === firstWord[i])) {
            result += firstWord[i];
            continue;
        }
        break;
    }

    return result;
};
