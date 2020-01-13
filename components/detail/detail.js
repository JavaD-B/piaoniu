// components/detail/detail.js
const app = getApp()

var WxParse = require('../../wxParse/wxParse.js');
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

      let activeId = app.activityid

      console.log(activeId)

      wx.request({
        url: `https://api.piaoniu.com/v1/activityPageDetail?activityId=${activeId}&mweb=false&supportSpeedPackBuy=true`,
        success:  (res) => {
          this.setData({
            detailData: res.data
          })
        }
      })

      wx.request({
        url: 'http://localhost:3000/api/getIntroduce',
        // method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        // data: {
        //   num: 123
        // },
        success: (res) => {
          var article = res.data.result.activityDetails[0].detailDesc
          // var article = 'aaa'
          
          WxParse.wxParse('article', 'html', article, this, 5)
        }
      })

      wx.request({
        url: `https://m.piaoniu.com/api/v3/reviews?activityId=${activeId}&pageIndex=1&pageSize=10`,
      })
      success: (res) => {
        console.log(res.data)
        console.log(res.data.numPlusRelated)
        this.setData({
          commentCount: res.data.numPlusRelated
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    detailData: {},
    showIntroduce: '',
    className: 'content',
    moreButton: 'block',
    commentCount: ''
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
    },

    clickMore() {
      this.setData({
        className: '',
        moreButton: 'none'
      })
    },

    checkCom() {
      wx.navigateTo({
        url: '/components/comment/comment',
      })
    }
  }
})
