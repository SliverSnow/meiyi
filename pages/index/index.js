//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    imageWidth: wx.getSystemInfoSync().windowWidth,
    logged: false,
    takeSession: false,
    requestResult: ''
  },

//洗衣事件跳转处理函数
bindViewTap: function(){
  wx.navigateTo({
    url: '../wash/wash',
  })
},

//取衣事件跳转按钮
  bindTakeClothes:function(){
wx.navigateTo({
  url: '../take/take',
})
  },


  //充值事件跳转函数
  bindPayPage:function(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
})