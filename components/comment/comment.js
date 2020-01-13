// components/comment/comment.js
var app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    commentList: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached: function () {
      wx.setNavigationBarTitle({
        title: '全部评论'
      })

      let activityId = app.activityid

      wx.request({
        url: `https://m.piaoniu.com/api/v3/reviews?activityId=${activityId}&pageIndex=1&pageSize=10`,
        success: (res) => {
          this.setData({
            commentList: res.data
          })
        }
      })
    }
  }
})
