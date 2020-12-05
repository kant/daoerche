/**
 * @title Leetcode: 621. 任务调度器
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
    // 按字母去重统计个数
    const tasksMap = {};
    tasks.forEach(c => {
        if (!tasksMap[c]) {
            tasksMap[c] = 0;
        }

        tasksMap[c]++;
    });

    let useTime = 0;
    while (true) {
        let curN = n + 1;
        const tasksSort = Object.keys(tasksMap).sort((t1, t2) => tasksMap[t2] - tasksMap[t1]);
        for (let task of tasksSort) {
            tasksMap[task]--;
            curN--;
            useTime++;
            // 该任务都执行完毕了，去除该任务
            if (tasksMap[task] === 0) delete tasksMap[task];
            // 当前冷却结束了，应该从任务数量最多的重新开始执行
            if (curN === 0) break;
        }

        // 任务都执行完毕，结束
        if (Object.keys(tasksMap).length === 0) {
            break;
        }
        // 看冷却时间间隔是否已经过去
        useTime = useTime + (curN <= 0 ? 0 : curN);
    }

    return useTime;
};

const tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"];
console.log(leastInterval(tasks, 2));
