module.exports = {
  index: {
    bannerImages: [
      '/image/banner1.png',
      '/image/banner2.png',
      '/image/banner3.png',
      '/image/banner4.png'
    ],
    products: [
      {
        id: 1,
        name: '芒果干',
        image: '/image/mango.jpg',
        desc: '来自优质芒果，自然晾晒，保留原汁原味'
      },
      {
        id: 2,
        name: '菠萝干',
        image: '/image/pineapple.jpg',
        desc: '酸甜可口，含丰富维生素C'
      },
      {
        id: 3,
        name: '百香果干',
        image: '/image/passion.jpg',
        desc: '特有香气，酸甜可口，营养丰富'
      },
      {
        id: 4,
        name: '木瓜干',
        image: '/image/papaya.jpg',
        desc: '含丰富酵素，天然健康小零食'
      }
    ],
    advantages: [
      {
        icon: '🏭',
        title: '源头工厂',
        desc: '双工厂生产，国内工厂+越南工厂'
      },
      {
        icon: '🔄',
        title: 'OEM/ODM',
        desc: '支持代工生产，品牌定制'
      },
      {
        icon: '📦',
        title: '多种包装',
        desc: '散装/定量装/定制包装'
      },
      {
        icon: '🌏',
        title: '出口商检',
        desc: '符合国际标准，支持出口'
      }
    ]
  },
  company: {
    factoryImages: [
      '/image/factory1.jpg',
      '/image/factory2.jpg',
      '/image/factory3.jpg',
      '/image/factory4.jpg',
    //   '/images/factory5.png',
    //   '/images/factory6.png'
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
    ],
    companyDesc: '广东茂名佰果园食品有限公司成立于2015年，是一家专注于蜜饯果脯生产的现代化企业。公司主营芒果干、菠萝干、木瓜干、百香果干、菠萝芯。公司现有多个生产基地，可供货芒果干60吨/天。源头工厂，品质放心，佰果园食品期待与您共商合作，共创未来。'
  },
  products: {
    tabs: ['全部产品', '芒果干', '菠萝干', '百香果干', '木瓜干', '其他产品'],
    products: [
      {
        id: 1,
        name: '芒果干',
        category: '芒果干',
        image: '/image/mango.jpg',
        images: ['/image/mango_1.jpg', '/image/mango_2.jpg', '/image/mango_3.jpg'],
        desc: '采用优质芒果精心制作，保留了芒果的香甜口感和营养价值。色泽金黄，质地柔软，入口香甜。富含维生素A、C和膳食纤维。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['天然无添加', '色泽金黄', '香甜可口', '营养丰富']
      },
      {
        id: 2,
        name: '菠萝干',
        category: '菠萝干',
        image: '/image/pineapple.jpg',
        images: ['/image/pineapple_1.jpg', '/image/pineapple_2.jpg', '/image/pineapple_3.jpg'],
        desc: '精选新鲜菠萝，采用先进工艺加工制作。酸甜可口，保留了菠萝的天然风味和营养。富含维生素C和菠萝蛋白酶，有助于消化。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['酸甜可口', '质地软糯', '营养丰富', '助消化']
      },
      {
        id: 3,
        name: '百香果干',
        category: '百香果干',
        image: '/image/passion.jpg',
        images: ['/image/passion_1.jpg', '/image/passion_2.jpg', '/image/passion_3.jpg'],
        desc: '选用新鲜百香果精制而成，保留了百香果特有的香气和营养成分。酸甜可口，香气浓郁。富含维生素和花青素，有助于提高免疫力。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['酸甜适口', '香气浓郁', '营养丰富', '色泽鲜艳']
      },
      {
        id: 4,
        name: '木瓜干',
        category: '木瓜干',
        image: '/image/papaya.jpg',
        images: ['/image/papaya_1.jpg', '/image/papaya_2.jpg', '/image/papaya_3.jpg'],
        desc: '采用新鲜木瓜精心制作，保留了木瓜的营养成分和特有风味。口感软糯，甜度适中。富含木瓜酵素、维生素A和C，有助于消化和美容。',
        packaging: ['散装', '小包装', '礼盒装'],
        features: ['甜度适中', '口感绵软', '含丰富酵素', '美容养颜']
      },
      {
        id: 5,
        name: '菠萝芯',
        category: '其他产品',
        image: '/image/pineapple_core.jpg',
        images: ['/image/pineapple_core_1.jpg', '/image/pineapple_core_2.jpg', '/image/pineapple_core_3.jpg'],
        desc: '精选菠萝中心部位，采用特殊工艺加工而成。口感香甜爽脆，菠萝芯蕴含丰富的菠萝蛋白酶，有助于消化和减轻炎症。',
        packaging: ['散装', '小包装'],
        features: ['口感独特', '营养丰富', '助消化', '清新爽口']
      },
      {
        id: 6,
        name: '综合果干礼盒',
        category: '其他产品',
        image: '/image/mixed_gift.jpg',
        images: ['/image/mixed_gift_1.jpg', '/image/mixed_gift_2.jpg', '/image/mixed_gift_3.jpg'],
        desc: '精选多种果干组合而成，包括芒果干、菠萝干、百香果干和木瓜干。多种口味，满足不同需求，是送礼和自用的理想选择。',
        packaging: ['礼盒装'],
        features: ['多种口味', '精美包装', '营养丰富', '送礼佳品']
      }
    ]
  }
} 