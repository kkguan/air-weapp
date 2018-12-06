const warn = (msg, getValue) => {
    console.warn(msg);
    console.log('接收到的值为：', getValue);
};

const getCtx = (selector) => {
    const pages = getCurrentPages();
    const ctx = pages[pages.length -1];

    const componentCtx = ctx.selectComponent(selector);

    if(!componentCtx) {
        console.error('没有找到对应的组件');
    }

    return componentCtx;
};

module.exports = {
    warn,
    getCtx
};
