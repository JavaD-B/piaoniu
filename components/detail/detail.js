// components/detail/detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes: {
    attached: function () {
      wx.setNavigationBarTitle({
        title: '演出详情'
      })

      wx.request({
        url: 'https://api.piaoniu.com/v1/activityPageDetail?activityId=130267&mweb=false&supportSpeedPackBuy=true',
        success:  (res) => {
          this.setData({
            detailData: res.data
          })
        }
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    detailData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    mapcheck() {
      wx.navigateTo({
        url: '/components/map/map',
      })
    }
  }
})
