/**
 * leetCode 1047. 删除字符串中的所有相邻重复项
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const strArr = S.split('');
    let top = 0;
    for (let ch of strArr) {
        if (top === 0 || strArr[top - 1] !== ch) {
            strArr[top++] = ch;
        } else {
            top--;
        }
    }

    return strArr.slice(0, top).join('');
};

