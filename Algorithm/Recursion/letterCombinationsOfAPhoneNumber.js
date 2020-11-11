/**
 * @title Leetcode: 17. 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
// 回溯
const letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const charMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    const result = [];
    const group = digits.split('').map(num => charMap[num]);
    const generate = (group, idx, str) => {
        for (let i = 0; i < group[idx].length; i++) {
            if (group[idx + 1]) {
                generate(group, idx + 1, str + group[idx][i]);
                continue;
            }
            
            result.push(str + group[idx][i])
        }
    }
    generate(group, 0, '');

    return result;
};

// 使用reduce累加
const letterCombinations2 = function(digits) {
    if (digits.length === 0) return [];

    const charMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    return digits
        .split('')
        .map(num => charMap[num])
        .reduce((acc, cur) => {
            const res = [];
            acc.forEach(c1 => res.push(...cur.map(c2 => c1 + c2)));
            return res;
        });
};

console.log(letterCombinations('238'));