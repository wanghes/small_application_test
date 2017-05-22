Page({
	data:{
		longitudeText:"",//经度
		latitudeText:"" //纬度
	},
	fetchLocation:function(e){
		var _this = this;
		wx.getLocation({
			type:"wgs84",
			success:function(data){
				_this.setData({
					longitudeText:"你所在的经度位置是："+data.longitude,
					latitudeText:"你所在的维度位置是：" + data.latitude
				});
			}
		});
	}
})