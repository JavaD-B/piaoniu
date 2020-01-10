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
    Flist1:['综合排序','最新优先','低价优先','好评优先'],
    Flist2:['全部时间','一周内','一月内','本周末'],
    hid1:true,
    hid2:true,
    choosedata:['综合排序','全部时间'],
    time:['','thisWeekend','weekly','monthly'],
    showlist:['','']
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
  },
  listone:function(e){
    this.setData({
      hid1:true,
      choosedata:[this.data.Flist1[e.detail],this.data.choosedata[1]],
      showlist:[e.detail,this.data.showlist[1]]
    })
    // console.log(e.detail+'one')
  },
  listtwo:function(e){
    this.setData({
      hid2:true,
      choosedata:[this.data.choosedata[0],this.data.Flist2[e.detail]],
      showlist:[this.data.showlist[0],this.data.time[e.detail]]
    })
    // console.log(e.detail+'two')
  },
  choose:function(e){
   if(e.detail==1){
    this.setData({
      hid1:!this.data.hid1,
      hid2:true
    })
   }else{
    this.setData({
      hid1:true,
      hid2:!this.data.hid2
    })
   }
  }
})