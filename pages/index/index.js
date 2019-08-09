//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  onLoad: function() {
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '学车就找闵教练！',
      desc: '学车就找闵教练！',
      path: '/pages/index/index' // 路径，传递参数到指定页面。
    }
  }
})