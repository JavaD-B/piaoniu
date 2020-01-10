// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myType:"hot",
    bannerData:[],
    listNextPageKey:"",
    feedNextPageKey:"",
    listPageSize:7,
    feedPageSize:7,
    listData:[],
    feedData:[],
    tag:1,
    ifFirst:true,
    ifLogin:false,
    ifshowComment:true
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
      url: 'https://www.beetleworld.xyz/app/v1/feed/banner',
      method:'get',
      success:(res)=>{
        this.setData({
          bannerData:res.data
        })
      }
    })
    this.getListData("listPageSize","listNextPageKey","listData")
  },
  getListData(pageSizeType,keyType,type){
    wx.showLoading({})
    let url=""
    if(this.data.tag===1){
      url="https://www.beetleworld.xyz/app/v4/feed/hot"
    }else{
      url=`https://www.beetleworld.xyz/app/v1/tag/${this.data.tag}`
    }
    if(this.data.myType==="feed"){
      url="https://www.beetleworld.xyz/app/v1/feed"
    }
    try{
      wx.request({
        url,
        data:{
          pageSize:this.data[pageSizeType],
          nextPageKey:this.data[keyType],
        },
        method:'get',
        success:(res)=>{
          if(res.statusCode===200){
            this.setData({
              [type]:[...this.data[type],...res.data.data],
              [keyType]:res.data.nextPageKey,
              ifLogin:true
            },()=>{
              wx.hideLoading({})
            })
          }else{
            this.setData({
              ifLogin:false
            },()=>{
              wx.hideLoading({})
            })
          }
        },
        fail:(error)=>{
          console.log(error)
        }
      })
    }catch(e){
      // console.log(e)
    }
  },
  changeTag(e){
    this.setData({
      tag:e.detail.tag,
      listData:[],
      listNextPageKey:""
    },()=>{
      this.getListData("listPageSize","listNextPageKey","listData")
    })
  },
  changeType(e){
    this.setData({
      myType:e.detail.type
    },()=>{
      if(this.data.ifFirst&&this.data.myType==="feed"){
        this.getListData("feedPageSize","feedNextPageKey","feedData")
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
    if(this.data.myType==="hot"){
      this.getListData("listPageSize","listNextPageKey","listData")
    }else{
      this.getListData("feedPageSize","feedNextPageKey","feedData")
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})