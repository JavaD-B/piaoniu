// pages/find/find.js
var _ = require("underscore")
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
    listHasMore:true,
    feedHasMore:true,
    tag:1,
    ifFirst:true,
    ifLogin:false,
    ifshowComment:true,
    menuTop:0,
    menuFixed:false
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
    var _this=this
    var query=wx.createSelectorQuery()
    query.select(".classification-list").boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(function(res) {
      _this.setData({
        menuTop: res[0].top
      })
    })
    this.start()
  },
  start(){
    wx.showNavigationBarLoading()
    this.setData({
      myType:"hot",
      bannerData:[],
      listNextPageKey:"",
      feedNextPageKey:"",
      listPageSize:7,
      feedPageSize:7,
      listData:[],
      feedData:[],
      listHasMore:true,
      feedHasMore:true,
      tag:1,
      ifFirst:true,
      ifLogin:false,
      ifshowComment:true,
      menuTop:0,
      menuFixed:false
    })
    wx.request({
      url: 'https://www.beetleworld.xyz/app/v1/feed/banner',
      method:'get',
      success:(res)=>{
        this.setData({
          bannerData:res.data
        },()=>{
          wx.stopPullDownRefresh()
          wx.hideNavigationBarLoading()
        })
      }
    })
    this.getListData("listPageSize","listNextPageKey","listData")
  },
  getListData(pageSizeType,keyType,type,hasMore){
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
              ifLogin:true,
              [hasMore]:res.data.hasMore
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
  onPageScroll:function(e){
    this.setData({
      menuFixed:(this.data.menuTop < e.scrollTop)
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.start()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.myType==="hot"){
      if(this.data.listHasMore){
        this.getListData("listPageSize","listNextPageKey","listData","listHasMore")
      }else{
        wx.showToast({
          title: "没有更多了哟~",
          icon:"none",
          duration:0
        })
        setTimeout(()=>{
          wx.hideToast()
        },1000)
      }
    }else{
      if(this.data.feedHasMore){
        this.getListData("feedPageSize","feedNextPageKey","feedData","feedHasMore")
      }else{
        wx.showToast({
          title: "没有更多了哟~",
          icon:"none",
          duration:0
        })
        setTimeout(()=>{
          wx.hideToast()
        },1000)
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})