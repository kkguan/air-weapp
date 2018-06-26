---
title: Switch
---
## Switch

#### 使用指南

###### 在index.json中引入组件

```JSON
{
  "usingComponents": {
    "air-switch": "path/to/dist/switch/index"
  }
}
```


#### 代码演示

##### 基础用法

```HTML
  <air-panel title='同步开关'>
    <air-cell>
      <air-switch checked="{{sync.checked}}" bind:change="syncChange" />
    </air-cell>
  </air-panel>

  <air-panel title='异步开关'>
    <air-cell>
      <air-switch checked="{{async.checked}}" disabled="{{ async.disabled }}" loading="{{ async.loading }}" bind:change="asyncChange" />
    </air-cell>
  </air-panel>

  <air-panel title='禁止改动的开关'>
    <air-cell>
      <air-switch disabled="{{ true }}" />
    </air-cell>
  </air-panel>
```
```js
Page({
    data: {
        sync: {
            checked: false
          },
          async: {
            checked: true,
            loading: false
          },
    },
    syncChange({ detail }) {
        this.setData({
          'sync.checked': detail.checked
        });
    },
    
    asyncChange({ detail }) {
        this.setData({
          'async.loading': true
        });
        setTimeout(() => {
          this.setData({
            'async.loading': false,
            'async.checked': detail.checked
          });
        }, 500);
    }
})

```


#### 属性

名称 | 类型 | 是否必须 | 默认 | 描述
---|---|---|---|---|
checked | Boolean | 否 | false | switch状态,默认为false
loading | Boolean | 否 | false | loading状态，默认为false
disabled | Boolean | 否 | false| 禁用状态,默认为false


#### 事件
事件 | 说明 | 回调参数
---|---|---|
change | 点击触发 | 返回状态对象,{checked,loading}

