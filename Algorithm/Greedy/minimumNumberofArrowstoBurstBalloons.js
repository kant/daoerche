/**
 * @title Leetcode: 452. 用最少数量的箭引爆气球
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
    if (points.length === 0) return 0;
    if (points.length === 1) return 1;

    points.sort((p1, p2) => p1[0] - p2[0]);

    let res = 1;
    let [lastStart, lastEnd] = points[0];
    points.forEach(p => {
        const [start, end] = p;
        if (end < lastStart || start > lastEnd) {
            res++;
            [lastStart, lastEnd] = p;
            return;
        }

        lastStart = Math.max(lastStart, start);
        lastEnd = Math.min(lastEnd, end);
    });

    return res;
};

points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]

console.log(findMinArrowShots(points));