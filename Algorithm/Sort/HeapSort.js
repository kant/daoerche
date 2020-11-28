/**
 * @title 堆排序
 * @param arr
 * @param i
 * @param j
 */
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const maxHeapify = (arr, start, end) => {
    let dad = start;
    let son = dad * 2 + 1;

    if (son >= end) return;
    if (son + 1 < end && arr[son + 1] > arr[son]) son++;

    if (arr[dad] < arr[son]) {
        swap(arr, dad, son);
        maxHeapify(arr, son, end);
    }
};

const heapSort = (arr) => {
    const len = arr.length;
    for (let i = Math.floor((len - 2) / 2); i >=0; i--) {
        maxHeapify(arr, i, len);
    }

    for (let i = len - 1; i >0; i--) {
        swap(arr, 0, i);
        maxHeapify(arr, 0, i);
    }
};

module.exports = heapSort;

/**
 * 平均时间复杂度 O(n) = nlog(n)
 * Test
 */
const arr = [5, 4, 3, 2, 9, 3, 6, 1, 6, 4, 0, 9, 3];

console.log(arr);
heapSort(arr);
console.log(arr);
