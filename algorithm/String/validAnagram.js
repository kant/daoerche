/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const charMap = {};
    for (let char of s) {
        if (charMap[char] === undefined) {
            charMap[char] = 1;
            continue;
        }

        charMap[char] +=1;
    }

    for (let char of t) {
        if (charMap[char] === undefined) return false;
        charMap[char] -= 1;
    }

    return Object.keys(charMap).every(key => charMap[key] === 0);
};

const isAnagram2 = function(s, t) {
    const charArr = new Array(26).fill(0);
    for (let char of s) {
        charArr[char.charCodeAt(0) - 97]++;
    }

    for (let char of t) {
        charArr[char.charCodeAt(0) - 97]--;
    }

    return charArr.every(count => count === 0);
};

const s = 'a';
const t = 'b';

console.log(isAnagram2(s, t));
