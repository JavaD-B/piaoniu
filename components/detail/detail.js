// components/detail/detail.js
const app = getApp()

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
        url: 'https://www.beetleworld.xyz/app/v1/activityPageDetail?activityId=129375&mweb=false&supportSpeedPackBuy=true',
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
      var addInfo = {
        latitude: this.data.detailData.activity.venue.latitude,
        longitude: this.data.detailData.activity.venue.longitude,
        name: this.data.detailData.activity.venue.name,
        address: this.data.detailData.activity.venue.address
      }

      app.setInfo(addInfo)

      wx.navigateTo({
        url: `/components/map/map?latitude=${this.data.detailData.activity.venue.latitude}` ,
      })
    }
  }
})
