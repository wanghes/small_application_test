//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      phone: '',
      password: ''
    },
    test: '扫码',
    disabled: true,
    isPassword: true,
    isFocus: false,
    plain:false,
    items: [
      {name: 'isShowPas', value: '显示密码',id:"01111"},
      {name: 'isBindWeixin', value: '绑定此微信号', checked: 'true',id:"011122"}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  inputChange: function(e) {
    // const currentPage =  getCurrentPage();
    // console.log(CurrentPage);
    console.log(e);
    this.setData({
      disabled: false
    });
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    if (e.detail.value.contains('isShowPas')) {
      this.setData({
        isPassword: false,
        isFocus: true
      });
    } else {
      this.setData({
        isPassword: true,
        isFocus: true
      });
    }
  },
  onLoad: function () {
    console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
