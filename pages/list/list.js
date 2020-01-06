// pages/list/list.js
Page({
  data: {
    list:["全部分类","演唱会","话剧歌剧","休闲展览","体育赛事","旅游玩乐","音乐会","儿童亲子","舞蹈芭蕾","戏曲综艺"],
    listData:[],
    total:null,
    index:1
  },
  getdata(){
    let index=this.data.index
    let result = wx.request({
      url: `https://api.piaoniu.com/v2/activities?pageIndex=${index}&pageSize=10`,
      success: (result) => {
        this.setData({
          listData:[
            ...this.data.listData,
            ...result.data.data
          ],
          total:Math.ceil(result.data.totalNum/10)
        })    
      }
    })
  },
  onLoad() {
    //数据请求
    this.getdata()
  },

  scrollDown(){
    this.setData({
      index:this.data.index+1
    })
    this.getdata()
  }
})