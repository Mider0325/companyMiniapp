# 佰果园微信小程序

这是广东茂名佰果园食品有限公司的微信小程序源代码。小程序展示了公司的基本信息、产品展示和相关服务。

## 项目结构

- `pages/` - 小程序的页面
  - `index/` - 首页
  - `company/` - 公司介绍页
  - `products/` - 产品展示页
- `image/` - 图片资源
- `styles/` - 样式文件
- `utils/` - 工具函数
- `cloudfunctions/` - 云函数目录

## 云开发配置

本项目使用微信小程序云开发功能，需要进行以下配置：

1. 在微信开发者工具中开启云开发功能
2. 创建云环境，并在 `app.js` 中配置环境ID
3. 创建以下云数据库集合：

### 数据库集合结构

1. `config` 集合 - 全局配置
   - 文档ID: `global`
   - 字段:
     - `companyName`: String - 公司名称
     - `foundYear`: String - 成立年份
     - `mainProducts`: Array - 主要产品列表
     - `capacity`: String - 产能描述
     - `contacts`: Object - 联系人信息

2. `pageConfig` 集合 - 页面配置
   - 文档ID: `index` - 首页配置
     - 字段:
       - `bannerImages`: Array - 轮播图片路径列表
       - `products`: Array - 首页展示产品
       - `advantages`: Array - 优势列表，每项包含 title, desc, icon

   - 文档ID: `company` - 公司页面配置
     - 字段:
       - `factoryImages`: Array - 工厂图片路径列表
       - `advantages`: Array - 优势列表，每项包含 title, desc, icon
       - `certifications`: Array - 认证列表，每项包含 name, desc, icon
       - `companyDesc`: String - 公司描述文本

   - 文档ID: `products` - 产品页面配置
     - 字段:
       - `tabs`: Array - 产品分类标签
       - `products`: Array - 产品列表，结构详见代码

## 配置后台管理

可以使用微信云开发自带的数据库管理界面来管理内容，或开发自定义的管理界面。

## 图片替换指南

小程序中使用了多种图片资源，目前项目中包含的是占位图片。在实际使用前，需要替换为实际的图片资源。

替换指南：
1. 打开 `image/placeholder_info.html` 文件查看所有需要的图片信息
2. 按照指定的尺寸和名称准备实际图片
3. 替换 `image/` 目录中的对应文件

主要图片包括：
- 首页轮播图 (750x350): banner1.jpg, banner2.jpg, banner3.jpg
- 产品图片 (300x300): mango.jpg, pineapple.jpg, passion.jpg, papaya.jpg 等
- 导航图标 (32x32): home.png, home-active.png, company.png 等

## 开发和预览

1. 使用微信开发者工具打开项目
2. 在工具中预览或上传代码

## 联系方式

- 温胜开：18926730588
- 温建中：13035818146

© 2023 广东茂名佰果园食品有限公司

