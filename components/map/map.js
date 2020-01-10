// components/map/map.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  onLoad: function(options) {
    console.log(options)
  },

  lifetimes: {
    created() {
      this.map = wx.createMapContext('map')
    },

    attached: function () {
      wx.setNavigationBarTitle({
        title: '位置信息'
      })

      let addInfo = app.addInfo

      this.setData({
        addInfo,
        marker: [{
          latitude: addInfo.latitude,
          longitude: addInfo.longitude,
          iconPath: '/source/add-marker.png',
          width: 24,
          height: 39
        }]
      })
      // let pages = getCurrentPages()

      // let currentPage = pages[2]

      // let options = currentPage.options

      // console.log(currentPage)

      // console.log(options)
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    addInfo: {},
    marker: []
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
