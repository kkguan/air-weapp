const warn = (msg, getValue) => {
    console.warn(msg);
    console.log('接收到的值为：', getValue);
};

function getCtx(selector) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length -1];

    const componentCtx = ctx.selectComponent(selector);

    if(!componentCtx) {
        console.error('没有找到对应的组件');
    }

    return componentCtx;
}

const prefixInteger = function (num, n) {
    return (Array(n).join(0) + num).slice(-n);
};


module.exports = {
    warn,
    getCtx,
    prefixInteger
};
