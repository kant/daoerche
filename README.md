
# daoerche
<pre>
                  _                    _ _                          _                         _                    _                
                 | |                  (_|_)                        | |                       (_)                  | |               
 __      _____   | |__   ___ _ __      _ _  ___    __ _  ___    ___| |__   __ _  ___    _ __  _  __ _ _ __     ___| |__   ___ _ __  
 \ \ /\ / / _ \  | '_ \ / _ \ '_ \    | | |/ _ \  / _` |/ _ \  / __| '_ \ / _` |/ _ \  | '_ \| |/ _` | '_ \   / __| '_ \ / _ \ '_ \ 
  \ V  V / (_) | | |_) |  __/ | | |   | | |  __/ | (_| | (_) | \__ \ | | | (_| | (_) | | | | | | (_| | | | | | (__| | | |  __/ | | |
   \_/\_/ \___/  |_.__/ \___|_| |_|   | |_|\___|  \__,_|\___/  |___/_| |_|\__,_|\___/  |_| |_|_|\__,_|_| |_|  \___|_| |_|\___|_| |_|
                                     _/ |                                                                                           
                                    |__/                                                                                            
                                                         我本桀骜少年臣                                                               
                                                                                                                           
          _                    _                   _       _                  _                    _                                  
         | |                  (_)                 (_)     | |                | |                  (_)                               
         | |__  _   _  __  ___ _ __     __ _ _   _ _   ___| |__   ___ _ __   | |__  _   _  __  ___ _ __    _ __ ___ _ __             
         | '_ \| | | | \ \/ / | '_ \   / _` | | | | | / __| '_ \ / _ \ '_ \  | '_ \| | | | \ \/ / | '_ \  | '__/ _ \ '_ \            
         | |_) | |_| |  >  <| | | | | | (_| | |_| | | \__ \ | | |  __/ | | | | |_) | |_| |  >  <| | | | | | | |  __/ | | |           
         |_.__/ \__,_| /_/\_\_|_| |_|  \__, |\__,_|_| |___/_| |_|\___|_| |_| |_.__/ \__,_| /_/\_\_|_| |_| |_|  \___|_| |_|          
                                        __/ |                                                                                       
                                       |___/                                                                                        
                                                         不信鬼神不信人
</pre>


## What it is?
Front-End Learing

## Commit standard
```shell
npm i && npm run cm
```

## Title generation rules
```js
const dirTitleHandle = (path) => {
    if (hasPackageJsonFile) {
        // get!
        const titleCtx = packageJsonFile.description;
    } else {
        for (file in path) {
            fileIsDir ? dirTitleHandle(filePath) : parseFileCtx(filePath);
        }
    }
}

const parseFileCtx = (filePath) => {
    const titleReg = /@title (.*)/;
    const ctxStr = fileCtx;

    const found = ctxStr.match(titleReg);
    // get!
    const titleCtx = found[1];
}

dirTitleHandle(rootPath);
```


<pre>Algorithm
    Array
        containerWithMostWater.js:  Leetcode: 11. Container With Most Water
        containsDuplicate.js:  Leetcode: 217. 存在重复元素
        findAllNumbersDisappearedInAnArray.js:  Leetcode: 448. 找到所有数组中消失的数字
        moveZeroes.js:  LeetCode: 283. 移动零
        rotate.js:  leetcode 189. 旋转数组
    Base
        isIPV4.js:  判断一个ip地址是否为ipv4
    DP
        climbStairs.js:  leetcode 70. 爬楼梯
        longestPalindromicSubstring.js:  Leetcode: 5. 最长回文子串
        maxProfit.js:  Leetcode 121. 买卖股票的最佳时机
    Greedy
        minimumNumberofArrowstoBurstBalloons.js:  Leetcode: 452. 用最少数量的箭引爆气球
    LinkList
        addTwoNumbers.js:  Leetcode 2. 两数相加
        deleteNodeinaLinkedList.js:  Leetcode: 237. 删除链表中的节点
        getIntersectionNode.js:  LeetCode 160. 相交链表
        hasCycle.js:  leetcode 141. 环形链表
        insertionSortList.js:  Leetcode: 147. 对链表进行插入排序
        mergeTwoLists.js:  leetcode 21. 合并两个有序链表
        palindromeLinkedList.js:  Leetcode: 234. 回文链表
        removeNthNodeFromEndofList.js:  Leetcode: 19. 删除链表的倒数第N个节点
        reverseLinkedList.js:  Leetcode: 206. 反转链表
    Math
        3Sum.js:  Leetcode 15. 3Sum
        Binary.js:  Leetcode 191. 位1的个数
        GCD.js:  最大公约数：辗转相除法
        binarySearch.js:  二分查找
        hammingDistance.js:  Leetcode: 461. 汉明距离
        isPalindrome.js:  leetcode 9. 回文数
        longestCommonPrefix.js:  leetcode 14. 最长公共前缀
        majorityElement.js:  leetCode 169. 多数元素
        maxSubArray.js:  leetcode 53. 最大子序和
        mySqrt.js:  leetcode 69. x 的平方根
        powerOfTwo.js:  Leetcode: 231. 2的幂
        reverse.js:  leetcode 7. 整数反转
        searchInsert.js:  leetcode 35. 搜索插入位置
        singleNumber.js:  leetcode 136. 只出现一次的数字
        trailingZeroes.js:  leetCode 172. 阶乘后的零
        twoSum.js:  leetcode 1. 两数之和
        twoSum2.js:  leetCode 167. 两数之和 II - 输入有序数组
    Recursion
        letterCombinationsOfAPhoneNumber.js:  Leetcode: 17. 电话号码的字母组合
    Sort
        HeapSort.js:  堆排序
        QuickSort.js:  快速排序
        SelectionSort.js:  选择排序
        bubbleSort.js:  冒泡排序
    Stack
        MinStack.js:  LeetCode 155. 最小栈
    String
        commonChars.js:  leetCode 1002. 查找常用字符
        increasingDecreasingString.js:  Leetcode: 1370. 上升下降字符串
        lengthOfLongestSubstring.js:  3. 无重复字符的最长子串
    Tree
        countCompleteTreeNodes.js:  Leetcode: 222. 完全二叉树的节点个数
        createLinkTreeForArrTree.js:  将完全二叉树的数组形式转换为链表形式
        diameterOfBinaryTree.js:  Leetcode: 543. 二叉树的直径
        hasPathSum.js:  leetcode 112. 路径总和
        invertBinaryTree.js:  Leetcode: 226. 翻转二叉树
        maxDepth.js:  返回这个树的最大深度 (根节点到叶子节点的深度)
        mergeTwoBinaryTrees.js:  Leetcode: 617. 合并二叉树
        minDepth.js:  返回这个树的最小深度 (根节点到叶子节点的深度)
        snakeTraverse.js:  蛇形遍历Tree结构
    Utils
        linkList.js:  构造链表的工具函数
        tree.js:  构造树的工具函数
BuildReadMe: daoerche项目ReadMe自动构建工具
Css
    Flex: flex布局学习
Library
    javaScript
        closure.js:  创建一个闭包
        eventLoop.js:  浏览器Event Loop测试
        inherit.js:  写一个简单的继承
        promise.js:  实现一个基本的Promise类
        render.js:  实现一个简单的模板渲染
        sleep.js:  实现一个sleep函数
    vue: 实现一个简单的Vue
MobX
    exercise: Mobx学习
React
    MyApp: 第一个React入门项目
Shell
    Test: Shell脚本练习
    exerciseCD: shell脚本写的管理cd唱片程序
Test
    Lerna: lerna学习测试
    fingerprintjs: 测试浏览器指纹库
    test.js:  瞎几把临时测试文件
Vue
    DrowIo: Vue的相关流程和架构图
Webpack
    i18n: 手动撸一个i18n构建方案
</pre>
