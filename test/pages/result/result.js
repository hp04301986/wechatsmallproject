// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      width: options.width,
      u1: options.u1,
      u2: options.u2,
      u3: options.u3,
      u4: options.u4,
      l4: options.l4,
      u5: options.u5,
      u6: options.u6,
      lossRate: options.lossRate,
      rate: options.rate,
      freight: options.freight,
      packageFee: options.packageFee,
      makeFee: options.makeFee,
      installFee: options.installFee,
      initValue: options.initValue,
      targetValue: options.targetValue
    })
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