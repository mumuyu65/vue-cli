//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: ['小鱼','小猴','小马']
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
