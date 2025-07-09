# 云函数目录

该目录存放微信小程序云开发的云函数。

## 云函数列表

### updateContent

更新页面内容的云函数，用于后台管理系统调用。

```javascript
// updateContent/index.js 示例
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 更新页面内容
exports.main = async (event, context) => {
  const { type, id, data } = event
  
  try {
    if (type === 'global') {
      // 更新全局配置
      return await db.collection('config').doc('global').update({
        data: data
      })
    } else if (type === 'page') {
      // 更新页面配置
      return await db.collection('pageConfig').doc(id).update({
        data: data
      })
    }
  } catch (e) {
    return {
      success: false,
      error: e
    }
  }
}
```

### getContent

获取页面内容的云函数，用于小程序前端调用。

```javascript
// getContent/index.js 示例
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 获取页面内容
exports.main = async (event, context) => {
  const { type, id } = event
  
  try {
    if (type === 'global') {
      // 获取全局配置
      const globalConfig = await db.collection('config').doc('global').get()
      return {
        success: true,
        data: globalConfig.data
      }
    } else if (type === 'page') {
      // 获取页面配置
      const pageConfig = await db.collection('pageConfig').doc(id).get()
      return {
        success: true,
        data: pageConfig.data
      }
    }
  } catch (e) {
    return {
      success: false,
      error: e
    }
  }
}
``` 