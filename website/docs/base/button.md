---
title: button
---

## Button 按钮

#### 使用指南

###### 在 json 文件中配置button组件

```json
{
  "usingComponents": {
    "air-button": "path/to/dist/button/index"
  }
}
```

#### 代码演示

##### 基础用法

```HTML
<air-button type="primary" shape="circle" size="large" >默认按钮</air-button>
``` 
<!-- 
##### 按钮类型

```HTML
<air-button type="error" long="true">连通两边按钮</air-button>
<air-button type="primary">Primary</air-button>
<air-button type="ghost">Ghost</air-button>
<air-button type="info">Info</air-button>
<air-button type="success">Success</air-button>
<air-button type="warning">Warning</air-button>
<air-button type="error">Error</air-button>
```
##### 按钮尺寸
```HTML
<air-button  type="primary" size="large">大尺寸</air-button>
<air-button  type="primary" size="default">默认尺寸</air-button>
<air-button  type="primary" size="small">小尺寸</air-button>
```

##### 圆角不同尺寸

```HTML
<air-button type="success" shape="circle" size="large">大尺寸</air-button>
<air-button type="success" shape="circle">默认尺寸</air-button>
<air-button type="success" shape="circle" size="small">小尺寸</air-button>
```

##### 按钮状态

```HTML
<air-button  type="primary" loading="true">加载中按钮</air-button>
<air-button type="primary" disabled>禁用按钮</air-button>
``` -->
#### 属性

名称| 类型 |是否必须| 默认 | 描述
--- | --- |  ---     | ---  | ---|
type|  String | 否 | 空 | 按钮类型:default, primary, ghost, info, success, warning, error
size | String | 否 | 空 | 按钮大小:large,default,small
shape | String | 否 | squqre |按钮形状:square,circle
disabled | Boolean | 否 | false | 按钮禁用状态:默认是false
loading | Boolean | 否 | false | 按钮加载状态:默认是false
long | Boolean | 否 |  false  | 按钮的联通状态,默认是false
openType | String | 否 | - | 微信开放能力
appParameter | String | 否 | - | 打开 APP 时，向 APP 传递的参数
hoverStopPropagation | Boolean | 否 | - | 
hoverStartTime | Number | 否 | 20 |按住后多久出现点击态，单位毫秒
hoverStayTime　| Number | 否 | 70 | 手指松开后点击态保留时间，单位毫秒
lang　| String | 否 | en | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 
sessionFrom | String | 否 |当前标题| 会话来源
sendMessageTitle | String | 否 | 当前分享路径 | 会话内消息卡片点击跳转小程序路径
sendMessageImg | String | 否 | 截图 | 会话内消息卡片图片
showMessageCard | String | 否 | false | 显示会话内消息卡片


