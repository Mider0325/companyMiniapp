# 佰果园小程序底部标签栏图标指南

## 推荐图标方案

以下是为佰果园微信小程序底部标签栏推荐的几套图标方案。每组图标都包含常规状态(默认灰色)和激活状态(绿色)。

### 方案一：简约线条风格

这套图标风格简约、易识别，线条清晰，适合现代简约风格的应用。

- **首页**
  - 未选中：房子轮廓图标
  - 选中：填充的房子图标

- **公司介绍**
  - 未选中：建筑/工厂轮廓图标
  - 选中：填充的建筑/工厂图标

- **产品展示**
  - 未选中：水果或产品展示轮廓图标
  - 选中：填充的水果或产品展示图标

### 方案二：扁平化风格

这套图标采用扁平化设计，色彩简单，图形更加现代化。

- **首页**
  - 未选中：简化的房屋图标
  - 选中：带有色彩填充的房屋图标

- **公司介绍**
  - 未选中：公司/团队图标
  - 选中：带有色彩填充的公司/团队图标

- **产品展示**
  - 未选中：水果盘/货架图标
  - 选中：带有色彩填充的水果盘/货架图标

### 方案三：水果主题风格

这套图标与佰果园的主题更加贴合，直观展示企业特色。

- **首页**
  - 未选中：简单的房屋图标
  - 选中：有水果元素装饰的房屋图标

- **公司介绍**
  - 未选中：工厂/企业图标
  - 选中：有水果元素装饰的工厂/企业图标

- **产品展示**
  - 未选中：水果篮/芒果图标
  - 选中：色彩鲜艳的水果篮/芒果图标

## 获取图标的方法

### 1. 使用在线图标库

您可以从以下图标网站下载适合的图标：

- [Iconfont阿里巴巴矢量图标库](https://www.iconfont.cn/)
- [Flaticon](https://www.flaticon.com/)
- [IconFinder](https://www.iconfinder.com/)

### 2. 图标规格要求

- 建议尺寸：81px × 81px (@3x)
- 文件格式：PNG格式，透明背景
- 常规图标颜色：#999999
- 选中图标颜色：#4CAF50（绿色，与导航栏保持一致）

### 3. 图标命名和放置

按照微信小程序的要求，将图标命名为：
- 首页：home.png, home-active.png
- 公司介绍：company.png, company-active.png
- 产品展示：products.png, products-active.png

将所有图标文件放置在项目的 `images` 目录下。

## 图标示例代码

当您获取了合适的图标后，app.json中的tabBar配置已经设置好了：

```json
"tabBar": {
  "color": "#999999",
  "selectedColor": "#4CAF50",
  "backgroundColor": "#ffffff",
  "borderStyle": "black",
  "list": [
    {
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "images/home.png",
      "selectedIconPath": "images/home-active.png"
    },
    {
      "pagePath": "pages/company/company",
      "text": "公司介绍",
      "iconPath": "images/company.png",
      "selectedIconPath": "images/company-active.png"
    },
    {
      "pagePath": "pages/products/products",
      "text": "产品展示",
      "iconPath": "images/products.png",
      "selectedIconPath": "images/products-active.png"
    }
  ]
}
```

## 推荐图标具体描述

### 首页图标
- 一个简约的房子图标，代表首页
- 未选中状态是灰色轮廓，选中状态是绿色填充

### 公司介绍图标
- 一个工厂或公司建筑图标，代表公司介绍
- 未选中状态是灰色轮廓，选中状态是绿色填充

### 产品展示图标
- 可以是水果图标（如芒果、菠萝等）或者产品展示架图标
- 未选中状态是灰色轮廓，选中状态是绿色填充

以上图标方案结合了佰果园食品公司的业务特点，简洁明了地传达了各页面的功能，用户一目了然。 