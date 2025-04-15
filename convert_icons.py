#!/usr/bin/env python3
import os
from PIL import Image, ImageDraw

# 确保images目录存在
if not os.path.exists('images'):
    os.makedirs('images')

# 创建图标函数
def create_icon(filename, color, is_active=False):
    # 创建32x32像素的透明背景图片
    img = Image.new('RGBA', (32, 32), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 获取颜色值
    if is_active:
        color_value = (76, 175, 80, 255)  # 绿色 #4CAF50
    else:
        color_value = (153, 153, 153, 255)  # 灰色 #999999
    
    # 根据图标类型绘制形状
    if 'home' in filename:
        # 绘制房子形状
        draw.polygon([(16, 4), (4, 16), (8, 16), (8, 28), (24, 28), (24, 16), (28, 16)], 
                    outline=color_value, fill=color_value if is_active else None)
        # 绘制门
        door_color = (255, 255, 255, 100) if is_active else color_value
        draw.rectangle([14, 20, 18, 28], outline=door_color, fill=None)
    
    elif 'company' in filename:
        # 绘制建筑形状
        draw.rectangle([6, 10, 26, 28], outline=color_value, fill=color_value if is_active else None)
        # 绘制烟囱
        draw.rectangle([22, 6, 24, 10], outline=color_value, fill=color_value if is_active else None)
        # 绘制窗户
        window_color = color_value
        draw.rectangle([10, 15, 14, 19], outline=window_color, fill=None)
        draw.rectangle([18, 15, 22, 19], outline=window_color, fill=None)
        draw.rectangle([10, 22, 14, 26], outline=window_color, fill=None)
        draw.rectangle([18, 22, 22, 26], outline=window_color, fill=None)
    
    elif 'products' in filename:
        # 绘制芒果/水果形状
        if is_active:
            # 填充椭圆
            draw.ellipse([8, 12, 24, 28], outline=color_value, fill=color_value + (50,))
        else:
            # 只有轮廓的椭圆
            draw.ellipse([8, 12, 24, 28], outline=color_value, fill=None)
        
        # 绘制叶子
        draw.arc([12, 6, 20, 14], 180, 270, fill=color_value)
    
    # 保存图片
    img.save(filename)
    print(f"创建图标: {filename}")

# 生成所有图标
create_icon('images/home.png', '#999999', False)
create_icon('images/home-active.png', '#4CAF50', True)
create_icon('images/company.png', '#999999', False)
create_icon('images/company-active.png', '#4CAF50', True)
create_icon('images/products.png', '#999999', False)
create_icon('images/products-active.png', '#4CAF50', True)

print("所有图标已生成！") 