## panel


###### 在index.json中引入组件

```json
{
  "usingComponents": {
    "air-pannel": "path/to/dist/pannel/index"
  }
}
```


#### 代码演示

```HTML
<air-panel title="标题" hide-top>
    <view style="padding: 15px;">头部距离为 0 的 Panel</view>
</air-panel>

<air-panel title="标题">
    <view style="padding: 15px;">带有标题的 Panel</view>
</air-panel>

<air-panel title="标题" hide-border="{{ true }}">
    <view style="padding: 15px;">无边框的 Panel</view>
</air-panel>
```

#### 属性

名称 | 类型 | 是否必须 | 默认 | 描述
---|--- | --- | ---| ---
title | String | 否 | 空 | 设置面板的标题
hideTop | Boolean | 否 | false | 设置面板标题距离顶部距离
hideBorder | Boolean | 否 | false | 面板border展示控制
