// components/map/map.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes: {
    created() {
      this.map = wx.createMapContext('map')
    },

    attached: function () {
      wx.setNavigationBarTitle({
        title: '位置信息'
      })
    }
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
    handleCoverTap() {
      this.map.moveToLocation()
    }
  }
})
