var express = require('express'); 
var mysql = require('mysql');
var router = express.Router();             // 提取express的router方法



var pool = mysql.createPool({
	   host:'127.0.0.1',
	   user:'root',
	   password:'az1457800393', //mysql安装密码
	   database:'azsjk',   //数据库名称
	   port:3306      //端口号
})




router.post('/login',function(req,response){ 
//	  console.log('into.....')
      var username = req.body.username;
      var password =  req.body.password;
//    console.log('username'+username+'-'+'password'+password);
      getUserByName(username,function(err,result){
      	   if(result.length==0){
      	   	  response.send({flag:2})  //用户不存在
      	   }else if(result.length>0){
      	   	  if(password == result[0].password){
      	   	  	response.send({flag:1,result:result})  //登录成功
      	   	  }else if(password != result[0].password){
      	   	  	response.send({flag:3})  //密码错误
      	   	  }else{
      	   	  	response.send({flag:4})  //登录失败
      	   	  }
      	   }else{
      	   	   response.send({flag:4})  //登录失败
      	   }
      })
      
      
      
      

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






module.exports = router;  //输出模块