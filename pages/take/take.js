// pages/take/take.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   result:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

getScancode:function(){
  var myThis=this;
wx.scanCode({
  success(res){
 myThis.setData({
   result:res.result,
   scanType:res.scanType
 })
 
 
//  result所扫码的内容
//scanType所扫码的类型
  //  console.log(res.result)将数据打印在控制台
  }
})
},

// 取消扫描回退上一级页面
getBack:function(){
  wx.navigateBack({
    delta:1
  })
}
})