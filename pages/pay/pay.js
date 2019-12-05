// pages/login/login.js
Page({

 
    /** 页面的初始数据
     选择不同的金额，调用相对应的函数*/
    data: {
      un_click1:'money_box',
      un_click2: 'money_box',
      un_click3: 'money_box',
      un_click4: 'money_box',
      un_click5: 'money_box',
      un_click6: 'money_box'
  },
    lv1:function(){
    this.setData({
      un_click2: 'money_box',
      un_click3: 'money_box',
      un_click4: 'money_box',
      un_click5: 'money_box',
      un_click6: 'money_box',
      un_click1: 'money_box1'
    })
  },
  lv2: function () {
    this.setData({
      un_click2: 'money_box1',
      un_click3: 'money_box',
      un_click4: 'money_box',
      un_click5: 'money_box',
      un_click6: 'money_box',
      un_click1: 'money_box'
    })
  },
  lv3: function () {
    this.setData({
      un_click2: 'money_box',
      un_click3: 'money_box1',
      un_click4: 'money_box',
      un_click5: 'money_box',
      un_click6: 'money_box',
      un_click1: 'money_box'
    })
  },
  lv4: function () {
    this.setData({
      un_click2: 'money_box',
      un_click3: 'money_box',
      un_click4: 'money_box1',
      un_click5: 'money_box',
      un_click6: 'money_box',
      un_click1: 'money_box'
    })
  },
  lv5: function () {
    this.setData({
      un_click2: 'money_box',
      un_click3: 'money_box',
      un_click4: 'money_box',
      un_click5: 'money_box1',
      un_click6: 'money_box',
      un_click1: 'money_box'
    })
  },
  lv6: function () {
    this.setData({
      un_click2: 'money_box',
      un_click3: 'money_box',
      un_click4: 'money_box',
      un_click5: 'money_box',
      un_click6: 'money_box1',
      un_click1: 'money_box'
    })
  },
  
  





  /**
   * 页面的初始数据
   */
  data: {

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
wx.setTabBarItem({
  index: 0,
})
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