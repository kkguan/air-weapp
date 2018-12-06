const defaultData = {
    visible: false,
    content: '',
    duration: 2,
    type: 'default', // default || success || warning || error
};

let timer = null;

function Message(options) {
    const { selector = '#message' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

Component({
    externalClasses: ['air-class'],
    data: {
        ...defaultData
    },
    methods: {
        handleShow(options) {
            const { type = 'default', duration = 2 } = options;
            this.setData({
                ...options,
                type,
                duration,
                visible: true
            });

            const d = this.data.duration * 1000;
            if (timer) clearTimeout(timer);
            if (d !== 0) {
                timer = setTimeout(() => {
                    this.handleHide();
                    timer = null;
                }, d);
            }
        },
        handleHide () {
            this.setData({
                ...defaultData
            });
        }
    }
});

module.exports = {
    $Message: Message
};
