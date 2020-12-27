/**
 * @title 判断一个ip地址是否为ipv4
 * @param ip
 * @returns {boolean|*}
 */
const isIPV4 = ip => {
    const ipSubs = ip.split('.');

    if (ipSubs.length === 4) {
        const res = ipSubs.every(ipSub => {
            const num = Number(ipSub);
            return (num >= 0 && num <= 255) ? true : false;
        });

        return res;
    }

    return false;
}
