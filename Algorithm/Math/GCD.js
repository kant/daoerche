/**
 * @title 最大公约数：辗转相除法
 */
const GCD1 = (a, b) => {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let r = max % min;

    while (r) {
        max = min;
        min = r;
        r = max % min;
    }

    return min;
}
