// pages/relation/relation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }, 
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18873882118', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '学车就找闵教练！',
      desc: '学车就找闵教练！',
      path: '/pages/relation/relation' // 路径，传递参数到指定页面。
    }
  }
})