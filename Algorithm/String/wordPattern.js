/**
 * @title Leetcode: 290. 单词规律
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const patternMap = {};
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        if (!patternMap[c]) {
            patternMap[c] = words[i];
            continue;
        }

        if (patternMap[c] !== words[i]) {
            return false;
        }
    }

    if (new Set(Object.keys(patternMap)).size !== new Set(Object.values(patternMap)).size) {
        return false;
    }

    return true;
};

const pattern = "abba", str = "dog cat cat dog";
console.log(wordPattern(pattern, str));
