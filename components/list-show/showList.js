// components/list-show/showList.js
Component({
  properties: {
    tid:{
      type:Number
    }
  },
  lifetimes:{
    attached(){
      this.getdata()
    }
  },
  data: {
    listData:[],
    total:null,
    index:1,
  },
  methods: {
    getdata(){
      // console.log(this.data)
      let index=this.data.index
      let categoryId=this.data.tid
      let result = wx.request({
        url: `https://m.piaoniu.com/api/v3/activities?pageIndex=${index}&categoryId=${categoryId}&time=&sort=&seatMap=false&highestPrice=&lowestPrice=`,
        success: (result) => {
          // console.log(result.data.data)
            this.setData({
              listData:[
                ...this.data.listData,
                ...result.data.data
              ],
              total:Math.ceil(result.data.totalNum/15)
            }) 
        }
      })
    },
    scrollDown(){
      this.setData({
        index:this.data.index+1,
      })
      this.getdata()
    }
  }
})
