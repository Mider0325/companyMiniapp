// 首页
Page({
  data: {
    bannerImages: [
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg'
    ],
    company: {},
    products: [
      {
        id: 1,
        name: '芒果干',
        image: '/images/mango.jpg',
        desc: '来自优质芒果，自然晾晒，保留原汁原味'
      },
      {
        id: 2,
        name: '菠萝干',
        image: '/images/pineapple.jpg',
        desc: '酸甜可口，含丰富维生素C'
      },
      {
        id: 3,
        name: '百香果干',
        image: '/images/passion.jpg',
        desc: '特有香气，酸甜可口，营养丰富'
      },
      {
        id: 4,
        name: '木瓜干',
        image: '/images/papaya.jpg',
        desc: '含丰富酵素，天然健康小零食'
      }
    ]
  },
  onLoad: function() {
    const app = getApp();
    this.setData({
      company: {
        name: app.globalData.companyName,
        foundYear: app.globalData.foundYear,
        capacity: app.globalData.capacity
      }
    });
  },
  navigateToCompany: function() {
    wx.switchTab({
      url: '/pages/company/company'
    });
  },
  navigateToProducts: function() {
    wx.switchTab({
      url: '/pages/products/products'
    });
  }
}) 