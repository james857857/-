
Page({
  data: {
    is_show:true,
    movie_id:null,
    info:[]
  },
  onShareAppMessage() {
    return {
      title: '分享',
      path: 'page/component/pages/button/button'
    }
  },
  onLoad: function (obj) {
    let id = obj.id
    this.data.movie_id=id
    let that = this;
    wx.request({
      url: 'http://localhost/index.php/read',
      data:{id:id},
      method:"GET",
      success(e){
        // console.log(e.data)
        that.setData({
          info:e.data.data
        })
      }
    })
  },
  writepl(){
    this.setData({is_show:false})
  },
  resout(){
    this.setData({is_show:true})
  },
  plForm(obj){
    let text = obj.detail.value.text;
    let user_id = 1;
    let movie_id = this.data.movie_id;
    let that = this;
    wx.request({
      url: 'http://localhost/index.php/comment',
      method:"POST",
      data:{
        user_id:user_id,
        movie_id:movie_id,
        text:text
      },
      success(e){
        if(e.data.code==200){
          that.setData({
            info:e.data.data,
            is_show:true
          })
          wx.showToast({
            title: '评论成功',
            icon:"success",
            duration:1500
          })
        }
      }
    })
  }
})
