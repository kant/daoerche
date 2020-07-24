/**
 * leetCode
 * 167. 两数之和 II - 输入有序数组
 * -----------------------------------
 */
/**
 * 非递归算法 杨氏矩阵
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let sum = numbers[i] + numbers[j];

    while (sum !== target) {
        sum < target ? i++ : j--;
        sum = numbers[i] + numbers[j];
    }

    return [i + 1, j + 1];
};


/**
 * leetCode
 * 172. 阶乘后的零
 * -----------------------------------
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }

    return count;
};


/**
 * leetCode
 * 169. 多数元素
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num = nums[0];
    let count = 1;

    for (let i = 1, len = nums.length; i < len; i++) {
        const curNum = nums[i];
        if (num === curNum) {
            count++;
        } else {
            if (count >= 1) {
                count--;
            } else {
                num = curNum;
                count = 1;
            }
        }
    }

    return num;
};


/**
 * leetcode
 * 136. 只出现一次的数字
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^ cur, 0);
};


/**
 * leetcode
 * 70. 爬楼梯
 * -----------------------------------
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const resultList = [];
    resultList[0] = 1;
    resultList[1] = 1;

    for(let i = 2; i <= n; i++) {
        resultList[i] = resultList[i - 1] + resultList[i - 2];
    }

    return resultList[n];
};


/**
 * leetcode
 * 69. x 的平方根
 * -----------------------------------
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    while(right - left >= 0.01) {
        const m = (right + left) / 2;
        x / m < m ? right = m : left = m;
    }

    return left;
};


/**
 * leetcode
 * 53. 最大子序和
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let tempMax = nums[0];
    for(let i = 1, len = nums.length; i < len; i++) {
        tempMax = Math.max(nums[i], tempMax + nums[i]);
        max = Math.max(max, tempMax);
    }

    return max;
};


/**
 * leetcode
 * 14. 最长公共前缀
 * -----------------------------------
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstWord = strs[0];
    const otherWords = strs.splice(1);
    if (!firstWord) return '';

    let result = '';
    for(let i = 0, len = firstWord.length; i < len; i++) {
        if (otherWords.every(word => word[i] === firstWord[i])) {
            result += firstWord[i];
            continue;
        }
        break;
    }

    return result;
};


/**
 * leetcode
 * 9. 回文数
 * -----------------------------------
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const originalNum = x;
    let newNum = 0;
    while(x) {
        newNum = (newNum * 10) + (x % 10);
        x = Math.floor(x/10);
    }

    return originalNum === newNum;
};


/**
 * leetcode
 * 7. 整数反转
 * -----------------------------------
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX_NUM = 2147483647;
    const MIN_NUM = -2147483648;

    let result = 0;
    while(x) {
        result = result * 10 + x % 10;
        x = Math.trunc(x / 10);
    }

    return result > MAX_NUM || result < MIN_NUM ? 0 : result;
};


/**
 * leetcode
 * 1. 两数之和
 * -----------------------------------
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let result = [];
    nums.forEach((num, i) => {
        let needNum = target - num;
        if (typeof hash[needNum] == 'number') {
            result[0] = hash[needNum];
            result[1] = i;
        } else {
            hash[num] = i;
        }
    });
    return result;
};

/**
 * 最大公约数：辗转相除法
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

// console.log(GCD1(9, 9))