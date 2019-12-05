// pages/Personal/PersonalInfo/PersonalInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**点击头像跳转本地相册绑定事件 */
  chooseImage:function(){
    wx.chooseImage({
      count: 1,
      sizeType: [],
      sourceType: ['album','camera'],
      success: function (res) { 
  const tempFilePath=res.tempFilePaths[0];
  _this.setData({
    personImage:tempFilePath 
  })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})