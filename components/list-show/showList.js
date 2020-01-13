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
    flag:true  
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
          // console.log(result.data.data)
            this.setData({
              listData:[
                ...this.data.listData,
                ...result.data.data        
              ],
              flag:true,
              total:Math.ceil(result.data.totalNum/15)
            }) 
            wx.hideLoading({})    
        }
      })
    },
    getdata2(){
      // console.log(this.data)
      let index=this.data.index
      let categoryId=this.data.tid
      let listdata=this.data.listdata
      let result = wx.request({
        url: `https://www.beetleworld.xyz/app/v3/activities?pageIndex=${index}&categoryId=${categoryId}&time=&sort=${listdata[0]}&seatMap=false&highestPrice=&lowestPrice=&time=${listdata[1]}`,
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
      let id=e.currentTarget.dataset.activityid  
      let star=e.currentTarget.dataset.star
      
      app.setId({
        id,
        star
      })
      wx.navigateTo({
        url: '/components/detail/detail',
      })   
    },
    scrollDown(){
      wx.showLoading({})
      if(this.data.flag){
        this.setData({
          index:this.data.index+1,
          flag:false
        })
        this.getdata() 
      }
      
    }
  }
})
