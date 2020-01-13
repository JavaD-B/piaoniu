//app.js
App({
  addInfo: {
    latitude: ''
  },
  activityid:{
    id:'',
    star:''
  },     
  setInfo(addInfo) {
    this.addInfo = addInfo
  },
  setId(activityid) {
    this.activityid = activityid
  }
})