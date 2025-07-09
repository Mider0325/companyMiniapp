const app = getApp();

// 本地图片白名单，根据 image 目录实际文件维护
const localImages = [
  'papaya.jpg',
  'home.png',
  'products.png',
  'company.png',
  'company-active.png',
  'home-active.png',
  'default.jpg',
  'logo.jpg'
];

Component({
  properties: {
    src: { type: String, value: '' },
    mode: { type: String, value: 'aspectFill' },
    fallback: { type: String, value: '' }, // 可选兜底图片
    className: { type: String, value: '' }, // 兼容 class 传递
    style: { type: String, value: '' }
  },
  data: {
    realSrc: ''
  },
  observers: {
    src(val) {
      this.setData({ realSrc: this.getFullUrl(val) });
    }
  },
  methods: {
    getFullUrl(path) {
      if (!path) return '';
      // 兼容历史 images/ 路径
      if (/^\/?images\//.test(path)) path = path.replace(/^\/?images\//, 'image/');
      // 去掉所有开头的斜杠
      path = path.replace(/^\/+/, '');
      // 只要是 image/xxx.jpg，判断 xxx.jpg 是否在本地白名单
      if (path.startsWith('image/')) {
        const fileName = path.split('/').pop();
        if (localImages.includes(fileName)) {
          // 一律返回 /image/xxx.jpg，保证根目录查找
          return '/image/' + fileName;
        }
      }
      if (/^https?:\/\//.test(path)) return path;
      // 兜底拼接云端前缀
      return (app.globalData.imagePrefix || '') + path;
    },
  },
  lifetimes: {
    attached() {
      this.setData({ realSrc: this.getFullUrl(this.data.src) });
    }
  }
}); 