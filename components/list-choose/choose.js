// components/list-choose/choose.js
Component({
  data:{
    choose:false
  },
  properties:{
    choosedata:{
      type:Array
    }
  },
  observers:{
    'choosedata':function(){
      this.setData({
        choose:false
      })
    }
  },
  methods: {
    handleclick:function(e){
      this.triggerEvent('choosecl',e.currentTarget.dataset.index)
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
