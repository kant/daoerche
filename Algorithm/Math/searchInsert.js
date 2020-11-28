/**
 * @title leetcode 35. 搜索插入位置
 * @param {*} nums
 * @param {*} target
 */
var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    /**
     * 为什么返回low不会出错，思考最终low = high下标的时候，由于没有返回mid，则一定有
     * […, lastNum, mid, nextNum, …]
     * target要么处于，lastNum - mid之间，此时会target < mid，high = mid - 1，但是我们应该插入到mid的位置，即low位置
     * target或者处于，mid - nextNum，此时会target > mid，low = mid + 1，没有错，我们这个时候确实应该插入到mid + 1的位置，即low
     */
    return low;
};
