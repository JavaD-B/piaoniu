const app = getApp()
Component({
  properties: {
    tid:{
      type:Number
    },
    listdata:{
      type:Array
    }
  },
  lifetimes:{
    attached(){
      this.getdata()
    }
  },
  observers:{
    "listdata":function(){
      // console.log(this.data.listdata)
      this.getdata2()
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
      let listdata=this.data.listdata
      let result = wx.request({
        url: `https://www.beetleworld.xyz/app/v3/activities?pageIndex=${index}&categoryId=${categoryId}&time=&sort=${listdata[0]}&seatMap=false&highestPrice=&lowestPrice=&time=${listdata[1]}`,
        success: (result) => {
          console.log(result.data.data)
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
    getdata2(){
      // console.log(this.data)
      let index=this.data.index
      let categoryId=this.data.tid
      let listdata=this.data.listdata
      let result = wx.request({
        url: `https://www.beetleworld.xyz/app/api/v3/activities?pageIndex=${index}&categoryId=${categoryId}&time=&sort=${listdata[0]}&seatMap=false&highestPrice=&lowestPrice=&time=${listdata[1]}`,
        success: (result) => {
          // console.log(result.data.data)
            this.setData({
              listData:[
                ...result.data.data
              ],
              total:Math.ceil(result.data.totalNum/15)
            }) 
        }
      })
    },
    handleclick:function(e){
      app.setId(e.currentTarget.dataset.activityid)
      wx.navigateTo({
        url: '/components/detail/detail',
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
