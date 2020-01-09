// pages/list/list.js
Page({
  data: {
    list:[{
      name:"全部分类",
      id:0
    },{
      name:"演唱会",
      id:1
    },{
      name:"话剧歌剧",
      id:2
    },{
      name:"休闲展览",
      id:5
    },{
      name:"体育赛事",
      id:8
    },{
      name:"旅游玩乐",
      id:9
    },{
      name:"音乐会",
      id:3
    },{
      name:"儿童亲子",
      id:4
    },{
      name:"舞蹈芭蕾",
      id:6
    },{
      name:"戏曲综艺",
      id:7
    }],
    nowindex:0,
    cuind:0,

  },
  
  onLoad() {
    //数据请求
    // this.getdata()
  },
  onMyEvent: function(e){
    this.setData({
      nowindex:e.detail.nowindex,
      cuind:e.detail.cuind,
    })
    // console.log(e.detail)
  },
  swiperchange:function(e){
    let currentindex=this.data.list[e.detail.current].id
    this.setData({
      nowindex:currentindex,
      cuind:e.detail.current,
    })
  }
})