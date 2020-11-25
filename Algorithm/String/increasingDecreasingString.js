/**
 * @title Leetcode: 1370. 上升下降字符串
 * @param {string} s
 * @return {string}
 */
const sortString = function(s) {
    const letterArr = new Array(26).fill(0);
    for (let char of s) {
        letterArr[char.charCodeAt(0) - 97]++;
    }

    let result = '';
    let i = 0;
    let noChar = true;
    while (noChar) {
        i = 0;
        noChar = false;
        while (i < 26) {
            const num = letterArr[i];
            if (num > 0) {
                noChar = true;
                letterArr[i]--;

                const char = String.fromCharCode(i + 97);
                result += char;
            }
            i++;
        }

        i = 25;
        while (i >= 0) {
            const num = letterArr[i];
            if (num > 0) {
                noChar = true;
                letterArr[i]--;

                const char = String.fromCharCode(i + 97);
                result += char;
            }
            i--;
        }
    }

    return result;
};

const s = "leetcode";
console.log(sortString(s));
