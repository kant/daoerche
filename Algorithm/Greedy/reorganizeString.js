/**
 * @title Leetcode: 767. 重构字符串
 * @param {string} S
 * @return {string}
 */
const reorganizeString = function(S) {
    const charMap = {};
    for (let c of S) {
        charMap[c]++ || (charMap[c] = 1);
    }

    const compareFn = (a, b) => charMap[b] - charMap[a]
    const queue = Object.keys(charMap).sort(compareFn);
    if (S === '' || charMap[queue[0]] > Math.floor((S.length + 1) / 2)) {
        return '';
    }

    let res = '';
    while (queue.length) {
        const c1 = queue.shift();
        charMap[c1]--;
        res += c1;

        if (queue.length) {
            const c2 = queue.shift();
            charMap[c2]--;
            res += c2;

            if (charMap[c2]) {
                queue.unshift(c2);
            }
        }

        if (charMap[c1]) {
            queue.unshift(c1);
        }

        queue.sort(compareFn)
    }

    return res;
};

const S = "aab";
console.log(reorganizeString(S));
