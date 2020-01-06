// components/find-classification/find-classification.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ListData:Array,
    tag:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    tagList:[
      {
        title:"全部",
        id:1
      },{
        title:"音乐",
        id:2
      },
      {
        title:"戏剧",
        id:3
      },
      {
        title:"展览",
        id:4
      },
      {
        title:"亲子",
        id:5
      },
      {
        title:"幕后花絮",
        id:6
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTag(e){
      this.triggerEvent("changeTag",{
        tag:e.target.dataset.tag
      })
    }
  }
})
