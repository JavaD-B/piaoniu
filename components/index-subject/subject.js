// components/index-subject/subject.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
    subjectList:{
      type:Array,
      observer(e){
        
        if(e.length!==0){
          let color = this.colorRgb(e[0].color)
          this.setData({
            color,
            toColor:color.slice(0,-1) + ',.5' + (')')
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
   toColor:"",
   current:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e){
      let current = e.detail.current
      let color = e.currentTarget.dataset.color[current].color
       color = this.colorRgb(color)
      this.setData({
        color,
        toColor:color.slice(0,-1) + ',.5' + (')'),
        current
      })
    },
    colorRgb(e) {
      // 16进制颜色值的正则
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      var color = e.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          var colorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        var colorChange = [];
        for (var i = 1; i < 7; i += 2) {
          colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "RGB(" + colorChange.join(",") + ")";
      } else {
        return color;
      }
    }
  }
})
