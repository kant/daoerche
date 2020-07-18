/**
 * 实现一个sleep函数
 */
const sleep = timestamp => {
    const startTime = new Date().getTime();
    while(new Date().getTime() - startTime < timestamp) {}
}

/**
 * Test
 */
console.log('start sleep');
sleep(1000);
console.log('already sleep 1s');
