//index.js
const app = getApp()

Page({
  data: {
    relist: [
      { name: "万达公馆店", phone: " 0816 - 2996429", posion: "万达公馆A区2栋-2铺" },
      { name: "二十一世纪花园店", phone: "0816-2202766", posion: "绵阳市普明南路东段21世纪花园" },
      { name: "树高卡地亚店", phone: " 0816-2883286", posion: "绵阳市创业大道树高卡地亚1-1-11号" },
      { name: "阳光曼哈顿店", phone: " 0816-2847075", posion: "绵阳市涪城区御林街49号" },
      { name: "奥林春天店", phone: " 0816-2853626", posion: "绵阳市奥林春天二期4栋103-3号" },
      { name: "长虹世纪店", phone: " 0816-2380327", posion: "绵阳市涪城区平政七队迪亨酒店斜对面" },
      { name: "华润中央公园店", phone: " 0816-2199129", posion: "绵阳市科创园区华润中央公园" },
      { name: "南河店", phone: " 0816-2176429", posion: "绵阳市南河金佳城南名著" },
      { name: "富临大都会店", phone: "0816-2924253", posion: "绵阳市富临大都会5栋1单元6号" },
    ],
    polist: [
      { name: "1958 - 一期", phone: "1958 - 一期", posion: "null" },
      { name: "1958 - 一期", phone: "1958 - 一期", posion: "null" },
      { name: "1958 - 一期", phone: "1958 - 一期", posion: "null" },
      { name: "1958 - 一期", phone: "1958 - 一期", posion: "null" },
      { name: "1958 - 一期", phone: "1958 - 一期", posion: "null" },
    ],
    currentSwiper: 0,
    autoplay: true,
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    imageWidth: wx.getSystemInfoSync().windowWidth,
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  // onShowAddress: function (e) {
  //   var latitude = e.target.dataset.item.Latitude;
  //   var longitude = e.target.dataset.item.Longitude;
  //   var param = "latitude=" + latitude + "&longitude=" + longitude;
  //   wx.navigateTo({
  //     url: '../map/map?' + param,
  //   })
  // },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },

  //洗衣事件跳转处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../wash/wash',
    })
  },

  //取衣事件跳转按钮
  bindTakeClothes: function () {
    wx.navigateTo({
      url: '../take/take',
    })
  },

  //充值页面跳转
  payPage:function(){
wx.navigateTo({
  url: '../pay/pay',
})
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }

 
})
//   wx.getSystemInfo({
// success: function (res) {
//   var clientHeight = res.windowWidth,
//     clientWidth = res.windowWidth,
//     rpxR = 750 / clientWidth,
//   var calc = clientHeight * rpxR;
//   console.log(calc)
//   that.setData({
//     winHeight: calc
//   });
// },
//   })