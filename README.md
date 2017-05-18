# small_application_test
# 小程序测试
## 1环境配置
### Nginx配置基于端口的域名
```
 upstream xiaochengxun {
      server localhost:3002;
      keepalive 64;
  }
  server {
      #此处省略一些基本配置
      #默认指向product的server
      listen 80;
      server_name www.xcx.com xcx.com;
      location / {
        proxy_pass http://xiaochengxun;
      }
  }
```
### host文件设置 C:\Windows\System32\drivers\etc\hosts 
```
127.0.0.1   xcx.com www.xcx.com
```
### 开启 charles 本地代理主机 ，手机开启代理模式：代理模式改为手动模式,添加主机名：192.168.2.12 端口：8888（charles默认的端口）
## 2添加图片上传到本地（wx.uploadFile），并查看图片预览接口（wx.previewImage）
```javascript
wx.previewImage({
  current: '', // 当前显示图片的http链接
  urls:result // 需要预览的图片http链接列表 [url1,url2,url3]
});
```
### 完整版
```javascript
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
```

### ~~~ 


