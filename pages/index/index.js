// 首页
const app = getApp();
const config = require('../../config/index');
Page({
  data: {
    bannerImages: [],
    company: {},
    products: [],
    advantages: [],
    isLoading: true
  },
  onLoad: function() {
    this.loadPageData();
  },
  loadPageData: function() {
    // 直接用本地 config
    const pageConfig = config.index;
    this.setData({
      bannerImages: pageConfig.bannerImages,
      products: pageConfig.products,
      advantages: pageConfig.advantages,
      isLoading: false,
      company: {
        name: app.globalData.companyName || '广东茂名佰果园食品有限公司',
        foundYear: app.globalData.foundYear || '2015',
        capacity: app.globalData.capacity || '60吨/天'
      }
    });
  },
  navigateToCompany: function() {
    wx.switchTab({ url: '/pages/company/company' });
  },
  navigateToProducts: function() {
    wx.switchTab({ url: '/pages/products/products' });
  },
  onPullDownRefresh: function() {
    this.loadPageData();
    wx.stopPullDownRefresh();
  },
  callPhone: function(e) {
    const phone = e.currentTarget.dataset.phone;
    if (phone) {
      wx.makePhoneCall({ phoneNumber: phone });
    }
  },
  copyWechat: function(e) {
    const wechat = e.currentTarget.dataset.wechat;
    if (wechat) {
      wx.setClipboardData({
        data: wechat,
        success: function() {
          wx.showToast({ title: '微信号已复制', icon: 'success' });
        }
      });
    }
  },
  onShareAppMessage() {
    return {
      title: '广东茂名佰果园食品有限公司',
      path: '/pages/index/index',
      imageUrl: '/image/logo.jpg'
    };
  }
}); 