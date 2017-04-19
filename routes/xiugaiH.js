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


//获取表信息
   function getAllUsers(uid,callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from user where uid = ?';
// 	  		console.log('conn'+conn)
   	  	conn.query(sql,[uid],function(err,result){
// 	  		  console.log('result:'+result)
   	  		  callback(err,result)
   	  	})
   	  })
   }
   
  
router.get('/xiugai',function(req,response){
      var id = req.query.id;
       
//    console.log(id)
      console.log(id)
  
// 获取信息
    getAllUsers(id,function(err,results){    //参数是一个函数
		if(err){
			response.send(err)
		}else if(results){
//			console.log('>>>>'+results);
			response.send({results:results});
		}
	})          
})



   //修改某一个信息
   function getAllUser(uname,pwd,tel,id,callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'update user set username = ?,password = ?,tel = ?  where uid = ?';
   	  	conn.query(sql,[uname,pwd,tel,id],function(err,result){
   	  		  console.log(result)
   	  		  callback(err,result)
   	  	})
   	  })
   }

router.post('/xiugai',function(req,response){
      var id = req.body.id;
      var user=req.body.username;
      var pas=req.body.password;
      var tel=req.body.tel;
      var tim=req.body.regtime;
    
//  修改数据
    getAllUser(user,pas,tel,id,function(err,results){    //参数是一个函数
		if(err){
			console.log('报错')
			response.send(err)
		}else if(results){
			console.log('成功');
			response.send({results:results});
		}
	})
       
    
   
})



















module.exports = router;  //输出模块