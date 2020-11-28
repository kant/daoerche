/**
 * @title 蛇形遍历Tree结构
 */
const snakeTraverse = root => {
    let queue = [root];
    const res = [];

    let flag = true;
    while (queue.length) {
        let temp = [];

        while (queue.length) {
            let cur = null;
            cur = flag ? queue.pop() : queue.shift();
            if (!cur) continue;
            // console.log(cur.val);
            res.push(cur.val);

            temp.push(cur.left);
            temp.push(cur.right);
        }

        queue = temp;
        flag = !flag;
    }

    return res;
}
