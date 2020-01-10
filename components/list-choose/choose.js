// components/list-choose/choose.js
Component({
  data:{
    choose:false
  },
  methods: {
    handleclick:function(e){
      if(!this.data.choose||this.data.choose!==e.currentTarget.dataset.index){
        this.setData({
          choose:e.currentTarget.dataset.index
        })
      }else{
        this.setData({
          choose:false
        })
      }
      
    }
  }
})
