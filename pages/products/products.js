// 产品展示页面
const app = getApp();
const config = require('../../config/index');
Page({
  data: {
    activeTab: 0,
    tabs: [],
    products: [],
    filteredProducts: [],
    isLoading: true,
    showDetailModal: false,
    currentProduct: null
  },
  onLoad: function() {
    this.loadPageData();
  },
  loadPageData: function() {
    // 直接用本地 config
    const pageConfig = config.products;
    this.setData({
      tabs: pageConfig.tabs,
      products: pageConfig.products,
      filteredProducts: pageConfig.products,
      isLoading: false
    });
  },
  switchTab: function(e) {
    const tabIndex = e.currentTarget.dataset.index;
    const tabName = this.data.tabs[tabIndex];
    let filteredProducts = [];
    if (tabIndex === 0) {
      filteredProducts = this.data.products;
    } else {
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
    app.globalData.currentProduct = product;
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
  },
  onPullDownRefresh: function() {
    this.loadPageData();
    wx.stopPullDownRefresh();
  },
  onShareAppMessage() {
    return {
      title: '产品展示 - 广东茂名佰果园食品有限公司',
      path: '/pages/products/products',
      imageUrl: '/image/logo.jpg'
    };
  }
}); 