//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hot:['影院热映','豆瓣热门','近期热播剧集'],
    movie:[]
  },
  onLoad: function () {
    let that = this;
    wx.request({
      url: 'http://localhost/index.php/list',
      method:"GET",
      dataType:"json",
      success(e){
        if(e.data.code==200){
          that.setData({movie:e.data.data})
        }
      }
    })
  },
  editTo(obj){
    let id = obj.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/logs/logs?id='+id
    })
  }
})
