Page({
     data: {
          data: [],
          password: [1, 2, 3, 6, 9]
     },
     onLoad(){
          
     },
     onEnd(data) {
          console.log(data)
          this.setData({
               data: data.detail
          });
     },
    
})