// components/index-selected/selected.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedList: {
      type: Array

    },
    selectedTabList: {
      type: Array,
      observer(e) {
        this.setData({
          list: e
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: []

  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e){
      let type = e.detail
      wx.request({
        url: `https://api.piaoniu.com/v3/home/dailySelected?recommendType=${type}`,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:(res)=>{
          let selectedList = res.data
          this.setData({
            selectedList
          })
        }
      })
      
    }
  }
})