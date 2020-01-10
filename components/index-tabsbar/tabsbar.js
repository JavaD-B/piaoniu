Component({
  data:{
    index:0,
    navscroll:0,
  },
  properties: {
    scrollData: {           
      type: Array,
    }
  },
  lifetimes:{
    attached: function() {
      
    },
  },
  methods: {
    btnclick:function(e){
      let typeNum = e.currentTarget.dataset.type;
      const myEventOption = {}
      this.triggerEvent("getType", typeNum, myEventOption)

      this.setData({
        index:e.currentTarget.dataset.index
      })
      let index = e.currentTarget.dataset.index
      let clientWidth = wx.getSystemInfoSync().windowWidth / 2
      let width = 0
      const query = wx.createSelectorQuery().in(this)
      let that=this
      query.selectAll('#item2').boundingClientRect(function(rect){ 
        // 循环获取计算当前点击的标签项距离左侧的距离 
        // width=rect[index-1].right
        for (let i = 0; i < index; i++) {
          
          width += rect[i].width
        }
        // console.log(width,clientWidth)
        if (width+ (rect[index].width / 2) > clientWidth) {
          that.setData({
            navscroll: width + rect[index].width / 2 - clientWidth
          })
 
        } else {
          that.setData({
            navscroll: 0
          })
        }
      }).exec()
    }
  }
})
