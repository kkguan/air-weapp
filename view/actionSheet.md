## ActionSheet 行动按钮

#### 使用指南


###### 在index.json中引入组件

```json
{
  "usingComponents": {
    "air-action-sheet": "path/to/dist/action-sheet/index"
  }
}
```

#### 代码演示

```HTML
<view style="margin-top: 100px">
    <air-button type="ghost" bind:click="handleOpen1">一般用法</air-button>
    <air-button type="ghost" bind:click="handleOpen2">带有提示,异步</air-button>
    <air-action-sheet
        visible="{{visible1}}"
        showCancel
        actions="{{actions1}}"
        bind:cancel="handleCancel1"
        bind:click="handleClickItem1">
    </air-action-sheet>
    <air-action-sheet visible="{{ visible2 }}" actions="{{ actions2 }}" show-cancel bind:cancel="handleCancel2" bind:click="handleClickItem2" mask-closable="{{ false }}">
    <view slot="header" style="padding: 16px">
        <view style="color: #444;font-size: 16px">确定吗？</view>
        <text>删除后无法恢复哦</text>
    </view>
</air-action-sheet>
</view>
<air-top-tips id="message" />
```
```js
const { $Message } = require('path/to/dist/base/index');

Page({
    data: {
        visible1: false,
        visible2: false,
        actions1: [
            {
                name: '选项1',
            },
            {
                name: '选项2'
            },
            {
                name: '去分享',
                icon: 'share',
                openType: 'share'
            }
        ],
        actions2: [
            {
                name: '删除',
                color: '#ed3f14'
            }
        ]
    },
    onShareAppMessage() {
        return {
            title: 'air Weapp'  
        };
    },

    handleOpen1() {
        this.setData({
            visible1: true
        })
    },
    handleOpen2() {
        this.setData({
            visible2: true
        })
    },
    handleCancel1() {
        this.setData({
            visible1: false
        })
    },
    handleCancel2() {
        this.setData({
            visible2: false
        })
    },
    handleClickItem1({detail}) {
        $Message({
            content: '点击了选项' + detail.index
        });
    },
    handleClickItem2({detail}) {
        const action = [...this.data.actions2];
        action[0].loading = true;
        this.setData({
            actions2: action
        })
        setTimeout(() => {
            action[0].loading = false;
            this.setData({
                visible2: false,
                actions2: action
            });
            $Message({
                content: '删除成功！',
                type: 'success'
            });
        }, 2000)
    }
})

```

#### 属性

名称 | 类型 | 是否必须 | 默认 | 描述
---|--- | --- | ---| ---
visible | Boolean | 否 | false | 面板的展示,默认为false
maskClosable | Boolean | 否 | false | 蒙层关闭面板开关
showCancel | Boolean | 否 | false | cancel选项的展示控制
cancelText | String | 否 | 取消 | calcel选项的文本
actions | Array | 否 | 空数组 | 面板自定义设置,可设置name,icon,openType,color,type,loading

#### 事件

事件名称 | 说明 | 回调参数
---|---|----
cancel | 取消面板按钮 | -
click | 用户点击当前面板index | {index}







