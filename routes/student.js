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




router.post('/zhuce',function(req,response){   //一请求 二响应参数给前台传数据
//  console.log('into.....');
    var username = req.body.username;
    var password =  req.body.password;
    var email =  req.body.email;
    var tel =  req.body.tel;
//  console.log(username);
//  console.log(password);
//  console.log(time);
//  console.log(tel);
    
    getUserByName(username,password,function(err,result){
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







//根据用户名查询用户
   function getUserByName(uname,pas,callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from user where username = ? or password = ?';
   	  	conn.query(sql,[uname,pas],function(err,result){
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

