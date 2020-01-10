// components/find-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myType:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeType(e){
      this.triggerEvent("changeType",{
        type:e.target.dataset.type
      })
    }
  }
})
