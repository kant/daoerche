/**
 * @title 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    let p = 0;
    let maxLen = 1;

    for (let i = 1; i < s.length; i++) {
        const cur = s[i];

        // 通过遍历来判断是否有重复字符
        for (let j = p; j < i; j++) {
            if (cur === s[j]) {
                const curLen = i - p;
                maxLen = Math.max(curLen, maxLen);

                p = j + 1;
                break;
            }
        }
    }

    return Math.max(s.length - p, maxLen);
};

var lengthOfLongestSubstring2 = function(s) {
    const st = {};
    let p = -1;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        // 通过map表来看是否有重复字符
        if (st[cur] !== undefined) {
            p = Math.max(st[cur], p);
        }

        st[cur] = i;
        maxLen = Math.max(i - p, maxLen);
    }

    return maxLen;
};

