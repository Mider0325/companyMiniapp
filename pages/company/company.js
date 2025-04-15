// 公司介绍页面
Page({
  data: {
    company: {},
    factoryImages: [
      '/images/factory1.jpg',
      '/images/factory2.jpg',
      '/images/factory3.jpg',
      '/images/factory4.jpg'
    ],
    advantages: [
      {
        title: '源头工厂',
        desc: '国内工厂+越南工厂双线生产，确保稳定供应',
        icon: '🏭'
      },
      {
        title: 'OEM/ODM定制',
        desc: '提供品牌定制服务，满足不同客户需求',
        icon: '🔄'
      },
      {
        title: '先进设备',
        desc: '采用先进生产线和设备，确保产品质量稳定',
        icon: '⚙️'
      },
      {
        title: '质量保证',
        desc: '严格的品控体系，通过多项国际认证',
        icon: '✅'
      },
      {
        title: '灵活包装',
        desc: '提供散装、定量装和定制包装多种选择',
        icon: '📦'
      },
      {
        title: '出口商检',
        desc: '具备出口资质，产品符合国际标准',
        icon: '🌏'
      }
    ],
    certifications: [
      {
        name: 'ISO 9001',
        desc: '质量管理体系认证',
        icon: '🏅'
      },
      {
        name: 'HACCP',
        desc: '食品安全管理体系认证',
        icon: '🛡️'
      },
      {
        name: 'FDA',
        desc: '美国食品药品监督管理局认证',
        icon: '🌎'
      },
      {
        name: '出口食品生产企业备案',
        desc: '具备出口资质',
        icon: '📋'
      }
    ]
  },
  onLoad: function() {
    const app = getApp();
    this.setData({
      company: {
        name: app.globalData.companyName,
        foundYear: app.globalData.foundYear,
        capacity: app.globalData.capacity,
        contacts: app.globalData.contacts
      }
    });
  },
  previewImage: function(e) {
    const current = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.factoryImages
    });
  }
}) 