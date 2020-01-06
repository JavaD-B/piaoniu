// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    categoryList:[],
    middleImg:{},
    selectedList:[],
    subjectList:[]
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
          url: 'https://api.piaoniu.com/v3/home?type=4', //仅为示例，并非真实的接口地址
          header: {
            'content-type': 'application/json' // 默认值
          },

          success :(res) =>{
            console.log(res.data.floors[6].data.items);
            
            let bannerList = res.data.floors[0].data;
            let categoryList = res.data.floors[1].data;
            let middleImg = res.data.floors[4].data;
            let selectedList = res.data.floors[5].data.items;
            let subjectList = res.data.floors[6].data.items;
            this.setData({
              bannerList,
              categoryList,
              middleImg,
              selectedList,
              subjectList
            })
          }
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