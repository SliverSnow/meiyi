// pages/choose/choose.js
// 获取全局应用程序对象
const app = getApp()
Page({

  /**页面的初始数据*/
  data: {//判断小程序的API，回调，参数，组件等是否在当前版本可用
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    isHide: false
  },

  /**生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 授权页面跳转首页的绑定事件
    var that = this;
    //查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
                //从数据库获取用户信息
              that.queryUserInfo();
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充

              //用户已经授权过
              wx.switchTab({
                url: '/pages/index/index'
              })
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success:res => {
                  //获取到用户的 code 之后：res.code
                  if(res.code){
                 //存用户信息
                 wx.setStorageSync('UserInfo', userInfo) 
                  }
                  console.log("用户的code:" + res.code);
                }
              
              });
            }
          });
        }else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
  },
  bindHomePage: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //插入登录的用户的相关信息到数据库
      wx.request({
        url: app.globalData.urlPath + 'user/add',
        data: {
          openid: getApp().globalData.openid,
          nickName: e.detail.userInfo.nickName,
          avatarUrl: e.detail.userInfo.avatarUrl,
          province: e.detail.userInfo.province,
          city: e.detail.userInfo.city
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //从数据库获取用户信息
          that.queryUsreInfo();
          console.log("插入小程序登录用户信息成功！");
        }
      });
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/index/index'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      }),
      //点击返回也会跳转到首页
        wx.switchTab({
          url: '/pages/index/index'
        })

    }
  },
  //获取用户信息接口
  queryUsreInfo: function () {
    wx.request({
      url: app.globalData.urlPath + 'user/userInfo',
      data: {
        openid: app.globalData.openid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        getApp().globalData.userInfo = res.data;
      }
    }) 



      //用户按了允许授权按钮
  //     var that = this;
  //   wx.switchTab({
  //     url: '../index/index',
  //   })
  //     // 获取到用户的信息了，打印到控制台上看下
  //     console.log("用户的信息如下：");
  //     console.log(e.detail.userInfo);
  //     //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
  //     // that.setData({
  //     //   isHide: true
  //     // });
      
  //   } else {
  //     //用户按了拒绝按钮
  //     wx.showModal({
  //       title: '警告',
  //       content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
  //       showCancel: false,
  //       confirmText: '返回授权',
  //       success: function (res) {
  //         // 用户没有授权成功，不需要改变 isHide 的值
  //         if (res.confirm) {
  //           console.log('用户点击了“返回授权”');
  //         }
  //       }
  //     });
    }
  })
 

  // // 授权页面跳转首页的绑定事件
  // bindHomePage: function () {
  //   wx.navigateTo({
  //     url: '../index/index',
  //   })
  // }