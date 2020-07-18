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

console.log(isIPV4('1.2.3.40'));