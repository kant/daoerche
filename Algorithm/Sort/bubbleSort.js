const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

/**
 * 平均时间复杂度 O(n) = n**2
 * Test
 */
const arr = [5, 4, 3, 2, 9, 3, 6, 1, 6, 4, 0, 9, 3];

console.log(arr);
bubbleSort(arr);
console.log(arr);
