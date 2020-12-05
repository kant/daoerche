/**
 * @title Leetcode: 292. Nim 游戏
 * @param {number} n
 * @return {boolean}
 * 想要赢，你就得是在4的倍数的情况下走后手，然后始终跟对手保持4的配对来拿
 * 换句话说，如果你先手想赢，那么这个n一定要不是4的倍数，你才能把n变成4的倍数然后就变成上面走后手的情况了
 */
const canWinNim = function(n) {
    return n % 4 !== 0;
};
