//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  clearLogs:function(){
    try {
      wx.removeStorageSync('logs');
      this.setData({
        logs:[]
      })
    } catch (e) {
      console.log(e);
      // Do something when catch error
    }
  }
})
