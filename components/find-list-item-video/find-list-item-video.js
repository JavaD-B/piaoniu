// components/find-list-item-video/find-list-item-video.js
import moment from "moment"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comment:Object,
    addtime:{
      type:Number,
      observer(times){
        this.setData({
          time:moment(times).format("YYYY-MM-DD")
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    time:"",
    ifshowComment:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
