// pages/find-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment:{},
    ifshowComment:false,
    commentList:[],
    cid:0,
    pageIndex:1,
    hasMore:true,
    like:0,
    replyCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id , type }=options
    let url=""
    if(type === "3"){
      url='https://www.beetleworld.xyz/app/v1/tweets/'
    }else if(type === "1"){
      url='https://www.beetleworld.xyz/app/v2/reviews/'
    }
    wx.request({
      url: url+id,
      method:"get",
      success:(res)=>{
        this.setData({
          comment:{
            content:type==="3"?res.data:res.data.review.content
          },
          like:res.data.likes,
          replyCount:res.data.replyCount
        })
      }
    })
    this.setData({
      cid:id
    },()=>{
      this.getComment()
    })
  },
  getComment(){
    if(this.data.hasMore){
      wx.showLoading()
      wx.request({
        url: 'https://www.beetleworld.xyz/app/v1/userReply',
        data:{
          pageIndex:1,
          pageSize:15,
          type:3,
          subjectId:this.data.cid
        },
        method:"get",
        success:(res)=>{
          this.setData({
            commentList:[...this.data.commentList,...res.data.data],
            pageIndex:this.data.pageIndex+1,
            hasMore:res.data.hasMore
          },()=>{
            wx.hideLoading()
          })
        }
      })
    }
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
    this.getComment()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})