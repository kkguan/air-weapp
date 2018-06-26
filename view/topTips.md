## TopTips 顶部提示

#### 使用指南

###### 在index.json中引入组件


```JSON
{
  "usingComponents": {
    "air-top-tips": "path/to/dist/top-tips/index"
  }
}
```

#### 代码演示

##### 基础用法

```HTML
<view style="margin-top: 100px">
    <air-button type="ghost" bind:click="handleDefault">默认提醒</air-button>
    <air-button type="ghost" bind:click="handleSuccess">成功提醒</air-button>
    <air-button type="ghost" bind:click="handleWarning">警告提醒</air-button>
    <air-button type="ghost" bind:click="handleError">错误提醒</air-button>
    <air-button type="ghost" bind:click="handleDuration">自定义持续时间</air-button>
</view>
<air-top-tips id="message" />
```
```js
const { $Message } = require('path/to/dist/base/index');

Page({
    handleDefault () {
        $Message({
            content: '这是一条普通提醒'
        });
    },
    handleSuccess () {
        $Message({
            content: '这是一条成功提醒',
            type: 'success'
        });
    },
    handleWarning () {
        $Message({
            content: '这是一条警告提醒',
            type: 'warning'
        });
    },
    handleError () {
        $Message({
            content: '这是一条错误提醒',
            type: 'error'
        });
    },
    handleDuration () {
        $Message({
            content: '我将在 5 秒后消失',
            duration: 5
        });
    }
});
```

#### 插件传值
参数 | 说明 | 类型 |  默认 | 可选
---|---|---|---|---|
visible | 控制tips显示隐藏 | Boolean | false | -
content | 文本展示内容 | String | 空 | - 
duration | 持续时间 | Number | 2 | - 
type | tip提示类型 | String |default | 可选值:default,success,warning,error

