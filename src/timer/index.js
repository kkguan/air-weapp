const { prefixInteger } = require('../utils/index');

Component({

    properties: {
        // 毫秒数
        deadline: {
            type: String,
            value: '',
            observer(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.init();
                }
            }
        },
        during: {
            type: String,
            value: '',
            observer(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.init();
                }
            }
        },
        // 1 | 2 | 3 样式种类
        styleType: {
            type: String,
            value: '1'
        },
        showDay: {
            type: Boolean,
            value: true
        },
        showMsec: {
            type: Boolean,
            value: false,
        }
    },

    data: {
        timer: null,
        d: '00',
        h: '00',
        m: '00',
        s: '00',
        ms: '0',
    },

    methods: {
        clearInterval() {
            const timer = this.data.timer;
            if (timer) {
                clearInterval(timer);
            }
        },
        init() {
            this.clearInterval();

            let {
                during,
                deadline,
                showDay,
                showMsec
            } = this.data;

            if (!during) {
                during = deadline - Date.now();
            }

            this.countdown({
                during: during,
                frequency: showMsec ? 100 : 1000,
                showDay,
                onChange: ({ d, h, m, s, ms }) => {
                    this.setData({
                        d,
                        h,
                        m,
                        s,
                        ms
                    });
                }
            });
        },

        countdown({
            during,
            frequency,
            showDay,
            onChange,
        }) {
            let t = during;

            const GetRTime = () => {
                let [d, h, m, s, ms] = [0, 0, 0, 0, 0];
                const second = Math.floor(t / 1000);

                if (t >= 0) {
                    d = Math.floor(second / 60 / 60 / 24);
                    h = showDay ? Math.floor(second / 60 / 60 % 24) : Math.floor(second / 60 / 60);
                    m = Math.floor(second / 60 % 60);
                    s = Math.floor(second % 60);
                    ms = Math.floor(t / 100 % 60);
                }
                if (t == 0) {
                    this.clearInterval();
                    this.triggerEvent('complete');
                }

                onChange({
                    d: prefixInteger(d, 2),
                    h: prefixInteger(h, 2),
                    m: prefixInteger(m, 2),
                    s: prefixInteger(s, 2),
                    ms: prefixInteger(ms, 1),
                });

                t = t - frequency;
            };

            const timer = setInterval(GetRTime, frequency);
            this.setData({
                timer
            });
        }
    },

    ready() {
        this.init();
    },
    detached() {
        this.clearInterval();
    }
});
