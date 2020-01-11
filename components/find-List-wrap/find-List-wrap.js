// components/find-List-wrap/find-List-wrap.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData:{
      type:Array
    },
    ifshowComment:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(e){
      wx.navigateTo({
        url: '/pages/find-detail/find-detail?id='+e.currentTarget.dataset.id+'&&type='+e.currentTarget.dataset.type,
      })
    }
  }
})
