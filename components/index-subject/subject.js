// components/index-subject/subject.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
    subjectList:{
      type:Array,
      observer(e){
        console.log(e);
        if(e.length!==0){
          this.setData({
            color:e[0].color,
            toColor:e[0].color.slice(0,1)+'1A'+e[0].color.slice(1) 
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   color:"",
   toColor:""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e){
      console.log(e);
      
      let current = e.detail.current
      let color = e.currentTarget.dataset.color[current].color
      this.setData({
        color,
        toColor:color.slice(0,1)+'1A'+color.slice(1) 
      })
     console.log(this.data.toColor);
    },

  }
})
