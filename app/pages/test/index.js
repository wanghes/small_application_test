var util = require('../../utils/util.js');

Page({
	onReady:function(){
		var host = "http://xcx.com";
		var that = this;
		wx.request({
			url:host+'/books',
			data:{},
			method:"GET",
			dataType:"json",
			success:function(res){		
				that.setData({
					books:res.data
				})
			}
		})
	},
	data:{
		books:[],
		name:"张三",
		url:""
	},
    switch1Change:function(){
    	console.log(111)
  	},
	switch2Change:function(){
	    console.log(2222);
	},
	changeName:function(e){
	  	this.setData({
	  		name:"李四"
	  	});
	},
	showID:function(item){
		console.log(item.currentTarget.dataset.id);
	},
	jumpLogs:function(){
		wx.navigateTo({
			url:"../logs/logs"
		})
	},

	jumpInfo:function(){
		wx.navigateTo({
			url:"../location/index"
		})
	},
	priview: function(e) {
		// let url = e.currentTarget.dataset.src;
		// console.log(url);
		// wx.previewImage({
		//   current: '', // 当前显示图片的http链接
		//   urls: [url] // 需要预览的图片http链接列表
		// });

		var host = "http://xcx.com",result;
		var that = this;
		wx.request({
			url:host+'/avatars',
			data:{},
			method:"GET",
			dataType:"json",
			success:function(res){		
				result = res.data.map(function(item){
					return host+'/uploads/'+item;
				})
				wx.previewImage({
				  current: '', // 当前显示图片的http链接
				  urls:result // 需要预览的图片http链接列表
				});
			}
		})
	},
	selectImg:function(){
		var that = this;
		wx.chooseImage({
		    success: function(res) {
   				var tempFilePaths = res.tempFilePaths;
   				var host = "http://xcx.com";
   				console.log(tempFilePaths);
   				wx.uploadFile({
				      url: host+'/upload', //仅为示例，非真实的接口地址
				      filePath: tempFilePaths[0],
				      name: 'avatar',
				      header:{
				      	"content-type":"multipart/form-data"
				      },
				      formData:{
				        'user': 'test'
				      },
				      success: function(res){
				        var data = JSON.parse(res.data);
						data.img = data.img.replace('\\','/');
				        that.setData({
		   					url:data.img
		   				});
				      }
			    })
   			}
		})
	}
})