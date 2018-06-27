const {
    createQrCodeImg
} = require('./qr/index');

Component({ 
    externalClasses: ['air-class'],
    properties: {
        value: {
            type: String,
            value: 'https://github.com/AlanZou007/air-weapp',
            observer(newVal) {
                this.draw(newVal);
            },
        },
        size: {
            type: Number,
            value: 300
        }
    },
    data: {
        loading: true,
        qrcodeImage: null
    },
    attached() {
        this.draw(this.data.value);
    },
    methods: {
        draw(value) {
            this.setData({
                loading: true
            });
            const codeImg = createQrCodeImg(value, {
                size: this.data.size
            });
            this.setData({
                qrcodeImage: codeImg,
                loading: false
            });
        }
    }
});
