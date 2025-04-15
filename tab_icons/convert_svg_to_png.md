# SVG转PNG指南

我已经为您创建了6个SVG格式的图标，分别是：
- home.svg - 首页图标（灰色）
- home-active.svg - 首页图标（绿色激活状态）
- company.svg - 公司介绍图标（灰色）
- company-active.svg - 公司介绍图标（绿色激活状态）
- products.svg - 产品展示图标（灰色）
- products-active.svg - 产品展示图标（绿色激活状态）

## 将SVG转换为PNG的方法

### 方法1：使用在线转换工具

1. 访问以下任一SVG到PNG的在线转换网站：
   - [ConvertIO](https://convertio.co/svg-png/)
   - [SVGPNG.com](https://svgpng.com)
   - [Cloudconvert](https://cloudconvert.com/svg-to-png)

2. 上传SVG文件
3. 设置输出尺寸为32x32像素（针对小程序推荐尺寸）
4. 进行转换并下载PNG文件
5. 将下载的PNG文件重命名为：
   - home.png
   - home-active.png
   - company.png
   - company-active.png
   - products.png
   - products-active.png

### 方法2：使用图形编辑软件

如果您有Photoshop、Illustrator或Sketch等图形编辑软件：

1. 打开SVG文件
2. 调整画布大小为32x32像素
3. 导出为PNG格式
4. 确保文件名与app.json中配置的文件名一致

### 方法3：使用命令行工具

如果您熟悉命令行，可以使用以下工具：

#### 使用Inkscape（免费开源软件）

```bash
inkscape -w 32 -h 32 home.svg -o home.png
inkscape -w 32 -h 32 home-active.svg -o home-active.png
inkscape -w 32 -h 32 company.svg -o company.png
inkscape -w 32 -h 32 company-active.svg -o company-active.png
inkscape -w 32 -h 32 products.svg -o products.png
inkscape -w 32 -h 32 products-active.svg -o products-active.png
```

#### 使用ImageMagick

```bash
convert -background none -resize 32x32 home.svg home.png
convert -background none -resize 32x32 home-active.svg home-active.png
convert -background none -resize 32x32 company.svg company.png
convert -background none -resize 32x32 company-active.svg company-active.png
convert -background none -resize 32x32 products.svg products.png
convert -background none -resize 32x32 products-active.svg products-active.png
```

## 图标说明

1. **首页图标**
   - 简约的房子图标，代表首页
   - 灰色版本用于未选中状态，绿色版本用于选中状态

2. **公司介绍图标**
   - 工厂/建筑图标，代表公司介绍
   - 包含烟囱和窗户等细节

3. **产品展示图标**
   - 芒果造型图标，与公司主营产品相关
   - 包含水果轮廓和叶子

所有图标设计简洁清晰，符合小程序界面设计规范。转换为PNG后放入images目录，即可在小程序中正常显示。 