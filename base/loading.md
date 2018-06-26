---
title: loading
---
## Loading 加载

#### 使用指南

###### 在index.json中引入组件

```json
{
  "usingComponents": {
    "air-icon": "path/to/dist/loading/index"
  }
}
```

#### 代码演示

```HTML
<view class="loading-wrap">
    <air-loading size="large" />
</view>
<view class="loading-wrap">
    <air-loading  />
</view>
<view class="loading-wrap">
    <air-loading  size="small" />
</view>

<view class="loading-wrap">
    <air-loading  color="red" />
</view>

```

#### 属性

名称 | 类型 | 是否必须 | 默认 | 描述
---|--- | --- | ---| ---
size | String | 否 | default | loading大小，值有：default,small,large
fullscrenn | Boolean | 否 | false | loading占满剩余空间
type | String | 否 | circle | loading类型，默认circle
color | String | 否 | 空 | loading颜色设置
