const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
};


/**
 * 平均时间复杂度 O(n) = n**2
 * Test
 */
const arr = [5, 4, 3, 2, 9, 3, 6, 1, 6];

console.log(arr);
selectionSort(arr);
console.log(arr);
