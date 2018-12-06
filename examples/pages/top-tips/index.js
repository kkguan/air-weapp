const { tips } = require('../../dist/base/index');

Page({
    handleDefault () {
        tips({
            content: '这是一条普通提醒'
        });
    },
    handleSuccess () {
        tips({
            content: '这是一条成功提醒',
            type: 'success'
        });
    },
    handleWarning () {
        tips({
            content: '这是一条警告提醒',
            type: 'warning'
        });
    },
    handleError () {
        tips({
            content: '这是一条错误提醒',
            type: 'error'
        });
    },
    handleDuration () {
        tips({
            content: '我将在 5 秒后消失',
            duration: 5
        });
    }
});
