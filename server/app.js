var express = require('express');
var cors = require('cors');
var multer = require('multer');
var fs = require("fs");
var app = express();
app.use('/uploads',express.static('uploads'))
app.use(cors());
// var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
  	var ext ='';
  	if(file.mimetype=="image/jpeg" || file.mimetype=="image/jpg"){
  		ext = '.jpg'
  	}else if(file.mimetype=="image/png"){
  		ext = '.png'
  	}else if(file.mimetype=="image/gif"){
  		ext = '.gif'
  	}
    cb(null, file.fieldname + '-' + Date.now()+ext)
  }
})

var upload = multer({ storage: storage })

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

var books = [
	{
		name:"test1",
		author:"王海松",
		id:guid()
	},
	{
		name:"test2",
		author:"王海松",
		id:guid()
	},
	{
		name:"test3",
		author:"王海松",
		id:guid()
	}
]

app.get('/',function(req,res){
	res.send(books)
});
app.get('/books',function(req,res){
	res.json(books);
});

app.post('/upload',upload.single("avatar"),function(req,res,next){
	console.log(req.file);
	console.log(req.body);
	res.send({img:req.file.path});
});

app.get('/avatars',function(req,res){
	fs.readdir('uploads',function(err,files){
		if(err) return res.send('err');
		var newFiles = files.reverse();
		res.json(newFiles);
	})
	
});


app.listen(3002);