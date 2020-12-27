/**
 * @title 二分查找
 */
const binarySearch = (array, target) => {
    const len = array.length;
    let low = 0,
        high = len - 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const midVal = array[mid];

        if (midVal === target) return mid;
        if (midVal < target) low = mid + 1;
        if (midVal > target) high = mid - 1;
    }

    return -1;
}
