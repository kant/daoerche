/**
 * @question:
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const res = [];

    const check = function (ans, lc, rc) {
        return lc === rc;
    }

    const generate = function (ans, lc, rc, len) {
        // 如果右括号数大于左括号数了，那么该情况已经不符合条件
        if (rc > lc) return;

        // 括号填充完毕
        if (ans.length === len) {
            if (check(ans, lc, rc)) {
                res.push(ans);
            }
            return;
        }
        generate(ans + '(', lc + 1, rc, len);
        generate(ans + ')', lc, rc + 1, len);
    }

    generate('', 0, 0, 2 * n);
    return res;
};

console.log(generateParenthesis(4));
