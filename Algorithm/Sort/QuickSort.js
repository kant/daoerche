const partition = (arr, low, high) => {
    const pivot = arr[low];

    while (low < high) {
        while (low < high && pivot <= arr[high]) {
            high--;
        }
        arr[low] = arr[high];

        while (low < high && pivot >= arr[low]) {
            low++;
        }
        arr[high] = arr[low];
    }

    arr[low] = pivot;
    return low;
};

const quickSort = (arr, low, high) => {
    if (low < high) {
        const pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
};


/**
 * 平均时间复杂度 O(n) = nlog(n)
 * Test
 */
const arr = [5, 4, 3, 2, 9, 3, 6, 1, 6];

console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
