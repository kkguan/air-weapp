---
title: stepper
---
## Stepper步进器

#### 使用指南

###### 在index.json中引入组件

```JSON
{
  "usingComponents": {
    "air-stepper": "path/to/dist/stepper/index"
  }
}
```


#### 代码演示

##### 基础用法

```HTML
<air-panel title="基础用法">
    <view style="padding: 16px">
        <air-stepper value="{{ value1 }}" min="0" max="100" bindchange="handleChange1" />
    </view>
</air-panel>

<air-panel title="小数">
    <view style="padding: 16px">
        <air-stepper value="{{ value2 }}" min="0" max="100" step="0.2" bindchange="handleChange2" />
    </view>
</air-panel>
```
```js
Page({
    data: {
        value1: 1,
        value2: 0.1
    },

    handleChange1 ({ detail }) {
        this.setData({
            value1: detail.value
        })
    },

    handleChange2 ({ detail }) {
        this.setData({
            value2: detail.value
        })
    }
});
```

#### 属性

名称 | 类型 | 是否必须 | 默认 | 描述
---|---|---|---|---|
max | Number | 否 | 2^31-1 | 整数最大值边界
min | Number | 否 | 1 | 默认值为1
step | Number | 否 | 1 | 步数,默认为1
value | Number | 否 | 1 | 初始值

#### 事件
事件 | 说明 | 回调参数
---|---|---|
change | 点击触发 | 返回事件对象

