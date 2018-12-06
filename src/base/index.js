const {getCtx} = require('../utils/index');

function tips(options) {
    const { selector = '#tips' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

module.exports = {
    tips: tips
};
