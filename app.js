//app.js
App({
  addInfo: {
    latitude: ''
  },
  activityid:{
    id:'',
  },     
  setInfo(addInfo) {
    this.addInfo = addInfo
  },
  setId(activityid) {
    this.activityid = activityid
  }
})