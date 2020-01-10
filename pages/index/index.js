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
    subjectList:[],
    selectedTabList:[],
    findTabList:[],
    scrollTop:0
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
    this.find = this.selectComponent('#index-find')
    
    
        wx.request({
          url: 'https://api.piaoniu.com/v3/home?type=4', //仅为示例，并非真实的接口地址
          header: {
            'content-type': 'application/json' // 默认值
          },

          success :(res) =>{
            console.log(res.data.floors);
            let bannerList = res.data.floors[0].data;
            let categoryList = res.data.floors[1].data;
            let middleImg = res.data.floors[4].data;
            let selectedList = res.data.floors[5].data.items;
            let selectedTabList = res.data.floors[5].data.tabs;
            let subjectList = res.data.floors[6].data.items;
            let findList = res.data.floors[6].data.items.data;
            let findTabList = res.data.floors[6].data.tabs;
            this.setData({
              bannerList,
              categoryList,
              middleImg,
              selectedList,
              subjectList,
              selectedTabList,
              findList,
              findTabList
            })
          }
        })
  },
  handleScrollEnd(){
   this.find.handleScrollEnd()
    
  },
  handleScroll(e){
    this.setData({
      scrollTop:e.detail.scrollTop
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