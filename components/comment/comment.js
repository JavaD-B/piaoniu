// components/comment/comment.js
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

      wx.request({
        url: `https://m.piaoniu.com/api/v3/reviews?activityId=129375&pageIndex=1&pageSize=10`,
        success: (res) => {
          console.log(res.data)
          this.setData({
            commentList: res.data
          })
        }
      })

    }
  }
})
