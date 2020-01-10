// components/list-frame/frame.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array
    },
    frame:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handclick:function(e){
      // console.log(e.currentTarget.dataset.index)
      if(this.data.frame==1){
        this.triggerEvent('chlist1',e.currentTarget.dataset.index)
      }else{
        this.triggerEvent('chlist2',e.currentTarget.dataset.index)
      }
      this.triggerEvent('')
      this.setData({
        index:e.currentTarget.dataset.index
      })
    }
  }
})
