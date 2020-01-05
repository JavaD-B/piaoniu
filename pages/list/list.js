// pages/list/list.js
Page({
  data: {
    
  },
  onLoad() {
    //数据请求
    let result = wx.request({
      url: 'https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=0&time=&sort=&seatMap=false&highestPrice=&lowestPrice=',
      success: (result) => {
        console.log(result.data)
      }
    })
    
  }
})