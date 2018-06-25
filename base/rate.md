---
title: rate
---

## Rate评分组件

#### 使用指南

###### 在index.json中引入组件

```json
{
  "usingComponents": {
    "air-icon": "path/to/dist/rate/index"
  }
}
```

#### 代码演示

```HTML
<air-cell-group>
    <air-cell title="基本用法">
        <air-rate
            name="star1"
            bind:change="onChange1"
            value="{{starIndex1}}">
        </air-rate>
    </air-cell>
    <air-cell title="自定义星星个数">
        <air-rate
            bind:change="onChange5"
            count="{{10}}"
            value="{{starIndex5}}">
        </air-rate>
    </air-cell>
    <air-cell title="自定义星星大小">
        <air-rate
            bind:change="onChange2"
            value="{{starIndex2}}"
            size="32">
        </air-rate>
    </air-cell>
    <air-cell title="自定义文字说明">
        <air-rate
            bind:change="onChange2"
            value="{{starIndex2}}">
            {{starIndex2}}星
        </air-rate>
    </air-cell>
     <air-cell title="手势touch选择星">
        <air-rate
            bind:change="onChange3"
            value="{{starIndex3}}">
            {{starIndex3}}星
        </air-rate>
    </air-cell>
    <air-cell title="禁用点击和手势选择星">
        <air-rate
            disabled="{{true}}"
            value="{{starIndex4}}">
            {{starIndex4}}星
        </air-rate>
    </air-cell>
</air-cell-group>
```
```js
Page({
    data : {
        starIndex1 : 0,
        starIndex2 : 0,
        starIndex3 : 0,
        starIndex4 : 4,
        starIndex5 : 5
    },
    onChange1(e){
        const index = e.detail.index;
        this.setData({
            'starIndex1' : index
        })
    },
    onChange2(e){
        const index = e.detail.index;
        this.setData({
            'starIndex2' : index
        })
    },
    onChange3(e){
        const index = e.detail.index;
        this.setData({
            'starIndex3' : index
        })
    },
    onChange5(e){
        const index = e.detail.index;
        this.setData({
            'starIndex5' : index
        })
    }
});
```

#### 属性
名称 | 类型 | 是否必须 | 默认 | 描述
---|---|---|---|---|
count | Number | 否 | 5 | 设置星星的z总个数
name | String | 否 | rate | 表单提交时的name值
value | Number | 否 | 0 |  设置星星亮起来的个数
disabled | Boolean | 否 | false | 禁止点击选择星星
size | Number | 否 | 20 | 设置星星的大小

#### 事件

事件名称 | 说明 | 回调参数
---|---|---|
change | 点击时触发 | 
