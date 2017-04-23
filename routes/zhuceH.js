var express = require('express'); 
var mysql = require('mysql');
var formidable =  require('formidable');
var fs =  require('fs'); 
var router = express.Router();             // 提取express的router方法



var pool = mysql.createPool({
	   host:'127.0.0.1',
	   user:'root',
	   password:'az1457800393', //mysql安装密码
	   database:'azsjk',   //数据库名称
	   port:3306      //端口号
})

//根据用户名查询用户
   function getUserByName(uname,callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from user where username = ?';
   	  	conn.query(sql,[uname],function(err,result){
   	  		 if(err){         //如果报错
   	  		  	console.log(err.message);          //把报错的 地方打印
   	  		  	return;
   	  		  }
   	  		  conn.release(); //释放连接
   	  		  callback(err,result) 	  		  
   	  	  })
   	  })
   }
router.post('/zhuce',function(req,response){   //一请求 二响应参数给前台传数据
//  console.log('into.....');
    var username = req.body.username;
    var password =  req.body.password;
    var tel =  req.body.tel;
    console.log(username);
    console.log(password);
    console.log(tel);
    
    getUserByName(username,function(err,result){
    	if(result==''||result==null){
           save(username,password,tel,function(err,result){
           	console.log('注册成功');
           	if(result.insertId >0){
           	     response.send({flag:1,result:result})   //注册成功
              }          
           })

    	}else if(result!=''||result!=null){
    		response.send({flag:1})  //用户已被占用
    		console.log('用户名已被注册')
    	}else {
    		console.log('注册失败')
    		response.send({flag:3})
    	}
    })
    

})

//插入数据
function save(uname,pwd,tel,callback){
	 pool.getConnection(function(err,conn){
   	  	var sql = 'insert into user(username,password,tel) value(?,?,?)';
   	  	conn.query(sql,[uname,pwd,tel],function(err,result){
   	  		 if(err){         //如果报错
   	  		  	console.log(err.message);          //把报错的 地方打印
   	  		  	return;
   	  		  }
   	  		  conn.release(); //释放连接
// 	  		  console.log('into save')
   	  		  callback(err,result) 	  		  
   	  	  })
   	 })	
}



//上传图片
router.post('/file',function(req,response){   //一请求 二响应参数给前台传数据
    console.log('into.....');
     
    var form = new formidable.IncomingForm(); //创建IncomingForm对象
    form.uploadDir = "./public/images/";
 //设置上传文件存放的文件夹，可以使用 fs.rename() 来改变上传文件的存放位置和文件名    如果 form.uploadDir 不赋值，他的默认位置是c盘
    form.parse(req,function(error,fields,files){
    	for(var i in files){
    		var files = files[i];
    		var fName = (new Date()).getTime();
    		switch(files.type){
    			case "image/jpeg":
    			fName = fName+".jpg";
    			break;
    			case "image/png":
    			fName = fName+".png";
    			break;
    		}
    		var newPath = "./public/images/"+fName
    		fs.renameSync(files.path,newPath); //重命名
    		response.send(fName);
    	}
    })
      
})


//上传图片















































module.exports = router;  //输出模块

