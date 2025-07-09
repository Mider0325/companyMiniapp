// 公司介绍页面
const app = getApp();
const config = require('../../config/index');
Page({
  data: {
    company: {},
    factoryImages: [],
    advantages: [],
    certifications: [],
    isLoading: true
  },
  onLoad: function() {
    this.loadPageData();
  },
  loadPageData: function() {
    // 直接用本地 config
    const pageConfig = config.company;
    this.setData({
      factoryImages: pageConfig.factoryImages,
      advantages: pageConfig.advantages,
      certifications: pageConfig.certifications,
      companyDesc: pageConfig.companyDesc,
      isLoading: false,
      company: {
        name: app.globalData.companyName || '广东茂名佰果园食品有限公司',
        foundYear: app.globalData.foundYear || '2015',
        capacity: app.globalData.capacity || '60吨/天',
        contacts: app.globalData.contacts || {}
      }
    });
  },
  previewImage: function(e) {
    const current = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.factoryImages
    });
  },
  onPullDownRefresh: function() {
    this.loadPageData();
    wx.stopPullDownRefresh();
  },
  onShareAppMessage() {
    return {
      title: '公司介绍 - 广东茂名佰果园食品有限公司',
      path: '/pages/company/company',
      imageUrl: '/image/logo.jpg'
    };
  }
}); 