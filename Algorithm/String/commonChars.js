/**
 * @title leetCode 1002. 查找常用字符
 * 这个主要考察如何求交集，以及26个字母相关题目的优化，这里使用对象就没有将26个字母数组化效率高
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const wordsCounts = A.length;
    const charCountsMap = {};

    A.forEach((word, sn) => {
        if (sn === 0) {
            for (let idx = 0, len = word.length; idx < len; idx++) {
                charCountsMap[word[idx]] = (charCountsMap[word[idx]] || 0) + 1;
            }
            return;
        }

        const charTempMap = {}
        for (let idx = 0, len = word.length; idx < len; idx++) {
            charTempMap[word[idx]] = (charTempMap[word[idx]] || 0) + 1;
        }

        Object.keys(charCountsMap).forEach(char => {
            if (typeof charTempMap[char] === 'undefined') {
                delete charCountsMap[char];

            } else if (charTempMap[char] < charCountsMap[char]) {
                charCountsMap[char] = charTempMap[char];
            }
        });
    });

    const result = [];
    Object.keys(charCountsMap).forEach(char => {
        const charCount = charCountsMap[char];

        for (let i = 0; i < charCount; i++) result.push(char);
    });
    return result;
};
