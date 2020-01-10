// components/index-find/find.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    findList:{
      type:Array,
      observer(e) {     
        this.pushList(e)
      }
    },
    findTabList: {
      type: Array,
      observer(e) {      
        this.setData({
          list: e
        })
      }
    },
    scrollTop:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[],
    index:2,
    contOne:[],
    contTwo:[],
    contOneHeight:0,
    contTwoHeight:0,
    itemOneHeight:588,
    itemTwoHeight:480,
    itemThreeHeight:510,
    itemFourHeight:508,
    fixed:false,
    bit:0,
    decimal:0
  },

  /**
   * 组件的方法列表
   */


 
  methods: {
    handleTap(){
      console.log(1);
    },
    handleScrollEnd(){

          wx.request({
        url: `https://api.piaoniu.com/v3/home/recommend?categoryType=0&pageIndex=${this.data.index}&pageSize=10`, //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success :(res) =>{
          console.log(res);
          
          this.setData({
            index : this.data.index +1
          })
          this.pushList(res.data.data)
        }
      })

    },
    pushList(e){
      
      if(e.length!==0){
        let contOneList = this.data.contOne
        let contTwoList = this.data.contTwo
        let contOneHeight = this.data.contOneHeight
        let contTwoHeight = this.data.contTwoHeight

        
        for(var i in e){
 
          if(contOneHeight >= contTwoHeight){
            switch(e[i].type){
              case 1 :   
              contTwoList.push(e[i]);
              contTwoHeight += this.data.itemOneHeight;
              break;
              case 2 : 
              contTwoList.push(e[i])
              contTwoHeight += this.data.itemTwoHeight;
              break;
              case 3 : 
              contTwoList.push(e[i])
              contTwoHeight += this.data.itemFourHeight;
              break;
              case 4 : 
              contTwoList.push(e[i])
              contTwoHeight += this.data.itemThreeHeight;
              break;
            }
          }
          else{
           switch(e[i].type){
             case 1 : 
             contOneList.push(e[i])
             contOneHeight += this.data.itemOneHeight;
             break;
             case 2 : 
             contOneList.push(e[i])
             contOneHeight += this.data.itemTwoHeight;
             break;
             case 3 : 
             contOneList.push(e[i])
             contOneHeight += this.data.itemFourHeight;
             break;
             case 4 : 
             contOneList.push(e[i])
             contOneHeight += this.data.itemThreeHeight;
             break;
           }
          }
        }
        this.setData({
          contOne:contOneList,
          contTwo:contTwoList,
          contOneHeight,
          contTwoHeight         
        })
      }
    }
  }
})
