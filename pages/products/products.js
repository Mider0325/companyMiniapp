// 产品展示页面
Page({
  data: {
    activeTab: 0,
    tabs: ['全部产品', '芒果干', '菠萝干', '百香果干', '木瓜干', '其他产品'],
    products: [
      {
        id: 1,
        name: '芒果干',
        category: '芒果干',
        image: '/images/mango.jpg',
        images: ['/images/mango_1.jpg', '/images/mango_2.jpg', '/images/mango_3.jpg'],
        desc: '采用优质芒果精心制作，保留了芒果的香甜口感和营养价值。色泽金黄，质地柔软，入口香甜。富含维生素A、C和膳食纤维。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['天然无添加', '色泽金黄', '香甜可口', '营养丰富']
      },
      {
        id: 2,
        name: '菠萝干',
        category: '菠萝干',
        image: '/images/pineapple.jpg',
        images: ['/images/pineapple_1.jpg', '/images/pineapple_2.jpg', '/images/pineapple_3.jpg'],
        desc: '精选新鲜菠萝，采用先进工艺加工制作。酸甜可口，保留了菠萝的天然风味和营养。富含维生素C和菠萝蛋白酶，有助于消化。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['酸甜可口', '质地软糯', '营养丰富', '助消化']
      },
      {
        id: 3,
        name: '百香果干',
        category: '百香果干',
        image: '/images/passion.jpg',
        images: ['/images/passion_1.jpg', '/images/passion_2.jpg', '/images/passion_3.jpg'],
        desc: '选用新鲜百香果精制而成，保留了百香果特有的香气和营养成分。酸甜可口，香气浓郁。富含维生素和花青素，有助于提高免疫力。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['酸甜适口', '香气浓郁', '营养丰富', '色泽鲜艳']
      },
      {
        id: 4,
        name: '木瓜干',
        category: '木瓜干',
        image: '/images/papaya.jpg',
        images: ['/images/papaya_1.jpg', '/images/papaya_2.jpg', '/images/papaya_3.jpg'],
        desc: '采用新鲜木瓜精心制作，保留了木瓜的营养成分和特有风味。口感软糯，甜度适中。富含木瓜酵素、维生素A和C，有助于消化和美容。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['甜度适中', '口感绵软', '含丰富酵素', '美容养颜']
      },
      {
        id: 5,
        name: '菠萝芯',
        category: '其他产品',
        image: '/images/pineapple_core.jpg',
        images: ['/images/pineapple_core_1.jpg', '/images/pineapple_core_2.jpg', '/images/pineapple_core_3.jpg'],
        desc: '精选菠萝中心部位，采用特殊工艺加工而成。口感香甜爽脆，菠萝芯蕴含丰富的菠萝蛋白酶，有助于消化和减轻炎症。',
        packaging: ['散装', '小包装'],
        features: ['口感独特', '营养丰富', '助消化', '清新爽口']
      },
      {
        id: 6,
        name: '综合果干礼盒',
        category: '其他产品',
        image: '/images/mixed_gift.jpg',
        images: ['/images/mixed_gift_1.jpg', '/images/mixed_gift_2.jpg', '/images/mixed_gift_3.jpg'],
        desc: '精选多种果干组合而成，包括芒果干、菠萝干、百香果干和木瓜干。多种口味，满足不同需求，是送礼和自用的理想选择。',
        packaging: ['礼盒装'],
        features: ['多种口味', '精美包装', '营养丰富', '送礼佳品']
      }
    ],
    filteredProducts: []
  },
  onLoad: function() {
    // 默认显示全部产品
    this.setData({
      filteredProducts: this.data.products
    });
  },
  switchTab: function(e) {
    const tabIndex = e.currentTarget.dataset.index;
    const tabName = this.data.tabs[tabIndex];
    let filteredProducts = [];
    
    if (tabIndex === 0) {
      // 全部产品
      filteredProducts = this.data.products;
    } else {
      // 按分类筛选
      filteredProducts = this.data.products.filter(item => item.category === tabName);
    }
    
    this.setData({
      activeTab: tabIndex,
      filteredProducts: filteredProducts
    });
  },
  showProductDetail: function(e) {
    const productId = e.currentTarget.dataset.id;
    const product = this.data.products.find(item => item.id === productId);
    
    // 将产品详情保存到全局数据
    const app = getApp();
    app.globalData.currentProduct = product;
    
    // 显示产品详情弹窗
    this.setData({
      showDetailModal: true,
      currentProduct: product
    });
  },
  closeProductDetail: function() {
    this.setData({
      showDetailModal: false,
      currentProduct: null
    });
  },
  previewImage: function(e) {
    const current = e.currentTarget.dataset.src;
    const product = this.data.currentProduct;
    
    wx.previewImage({
      current: current,
      urls: product.images
    });
  }
}) 