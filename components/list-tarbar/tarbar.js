Component({
  data:{
    index:0,
    navscroll:0,
    list:["全部分类","演唱会","话剧歌剧","休闲展览","体育赛事","旅游玩乐","音乐会","儿童亲子","舞蹈芭蕾","戏曲综艺"]
  },
  lifetimes:{
    attached: function() {
      
    },
  },
  methods: {
    btnclick:function(e){
      let index = e.currentTarget.dataset.index
      let clientWidth = wx.getSystemInfoSync().windowWidth / 2
      let width = 0
      const query = wx.createSelectorQuery().in(this)
      let that=this
      query.selectAll('#item2').boundingClientRect(function(rect){ 
        // 循环获取计算当前点击的标签项距离左侧的距离 
        for (let i = 0; i < index; i++) {
          width += rect[i].width
        }
        if (width > clientWidth) {
          that.setData({
            navscroll: width + rect[index].width / 2 - clientWidth
          })
 
        } else {
          that.setData({
            navscroll: 0
          })
        }
      }).exec()
      this.setData({
        index:e.currentTarget.dataset.index
      })
    }
  }
})
