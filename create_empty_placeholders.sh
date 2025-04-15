#!/bin/bash

# 确保目录存在
mkdir -p images

# 创建所需的图片文件（空文件）
touch images/banner1.jpg images/banner2.jpg images/banner3.jpg \
      images/mango.jpg images/pineapple.jpg images/passion.jpg images/papaya.jpg \
      images/mango_1.jpg images/mango_2.jpg images/mango_3.jpg \
      images/pineapple_1.jpg images/pineapple_2.jpg images/pineapple_3.jpg \
      images/passion_1.jpg images/passion_2.jpg images/passion_3.jpg \
      images/papaya_1.jpg images/papaya_2.jpg images/papaya_3.jpg \
      images/pineapple_core.jpg images/pineapple_core_1.jpg images/pineapple_core_2.jpg images/pineapple_core_3.jpg \
      images/mixed_gift.jpg images/mixed_gift_1.jpg images/mixed_gift_2.jpg images/mixed_gift_3.jpg \
      images/home.png images/home-active.png images/company.png images/company-active.png \
      images/products.png images/products-active.png

# 创建一个HTML文件，显示所有需要的占位图片及其名称
cat > images/placeholder_info.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>佰果园小程序 - 占位图片信息</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; color: #333; }
    h1 { color: #4CAF50; }
    .container { display: flex; flex-wrap: wrap; }
    .image-item { 
      margin: 10px; 
      padding: 15px; 
      background: white; 
      border-radius: 5px; 
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      width: 200px;
    }
    .color-box {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    .image-name { font-weight: bold; margin-top: 10px; }
    .image-path { font-size: 0.8em; color: #666; margin-top: 5px; }
  </style>
</head>
<body>
  <h1>佰果园小程序 - 占位图片信息</h1>
  <p>以下是项目中需要的所有占位图片的信息。使用这些颜色作为参考，为项目创建适当的图片。</p>
  
  <h2>Banner图片 (750x350)</h2>
  <div class="container">
    <div class="image-item">
      <div class="color-box" style="background-color: #4CAF50;">Banner 1</div>
      <div class="image-name">Banner 1</div>
      <div class="image-path">images/banner1.jpg</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #8BC34A;">Banner 2</div>
      <div class="image-name">Banner 2</div>
      <div class="image-path">images/banner2.jpg</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #CDDC39;">Banner 3</div>
      <div class="image-name">Banner 3</div>
      <div class="image-path">images/banner3.jpg</div>
    </div>
  </div>
  
  <h2>产品图片 (300x300)</h2>
  <div class="container">
    <div class="image-item">
      <div class="color-box" style="background-color: #FFEB3B; color: black;">芒果干</div>
      <div class="image-name">芒果干</div>
      <div class="image-path">images/mango.jpg</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #FFC107; color: black;">菠萝干</div>
      <div class="image-name">菠萝干</div>
      <div class="image-path">images/pineapple.jpg</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #FF9800; color: black;">百香果干</div>
      <div class="image-name">百香果干</div>
      <div class="image-path">images/passion.jpg</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #FF5722;">木瓜干</div>
      <div class="image-name">木瓜干</div>
      <div class="image-path">images/papaya.jpg</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #E91E63;">菠萝芯</div>
      <div class="image-name">菠萝芯</div>
      <div class="image-path">images/pineapple_core.jpg</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #9C27B0;">综合礼盒</div>
      <div class="image-name">综合礼盒</div>
      <div class="image-path">images/mixed_gift.jpg</div>
    </div>
  </div>
  
  <h2>导航图标 (32x32)</h2>
  <div class="container">
    <div class="image-item">
      <div class="color-box" style="background-color: #999999;">首</div>
      <div class="image-name">首页 (未选中)</div>
      <div class="image-path">images/home.png</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #4CAF50;">首</div>
      <div class="image-name">首页 (选中)</div>
      <div class="image-path">images/home-active.png</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #999999;">公</div>
      <div class="image-name">公司 (未选中)</div>
      <div class="image-path">images/company.png</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #4CAF50;">公</div>
      <div class="image-name">公司 (选中)</div>
      <div class="image-path">images/company-active.png</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #999999;">产</div>
      <div class="image-name">产品 (未选中)</div>
      <div class="image-path">images/products.png</div>
    </div>
    <div class="image-item">
      <div class="color-box" style="background-color: #4CAF50;">产</div>
      <div class="image-name">产品 (选中)</div>
      <div class="image-path">images/products-active.png</div>
    </div>
  </div>
  
  <p style="margin-top: 20px;">
    注意：这些是空文件占位符。要使小程序正常显示，请替换为实际图片。
  </p>
</body>
</html>
EOF

echo "所有占位图片文件已创建！"
echo "在浏览器中打开 images/placeholder_info.html 查看需要的图片信息。" 