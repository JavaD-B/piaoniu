// components/index-selectedItem/selectedItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedItem:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   bit:"",
   decimal:""
  },

  /**
   * 组件的方法列表
   */
  ready:function(){
    if(this.data.selectedItem.discountRate !== undefined){
      let data =  this.data.selectedItem.discountRate.toString()
      let bit = data.substring(0,1)
      let decimal = data.substring(1,3)
      this.setData({
        bit,
        decimal
      })
    }
  },
  methods: {

  }
})
