// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag:"hot",
    bannerData:[],
    nextPageKey:"",
    pageSize:7,
    listData:[],
    tag:1
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
    wx.request({
      url: 'https://api.piaoniu.com/v1/feed/banner',
      method:'get',
      success:(res)=>{
        this.setData({
          bannerData:res.data
        })
      }
    })
    this.getListData()
  },
  getListData(){
    wx.request({
      url: 'https://api.piaoniu.com/v4/feed/hot?pageSize=7&nextPageKey=',
      data:{
        pageSize:this.data.pageSize,
        nextPageKey:this.data.nextPageKey,
      },
      method:'get',
      success:(res)=>{
        this.setData({
          listData:[...this.data.listData,...res.data.data],
          nextPageKey:res.data.nextPageKey
        })
      }
    })
  },
  changeTag(e){
    this.setData({
      tag:e.detail.tag
    })
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