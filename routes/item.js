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
   function getAllUsers(callback){
   	console.log('pool'+pool)
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from user';
   	  		console.log('conn'+conn)
   	  	conn.query(sql,function(err,result){
   	  		  console.log('result:'+result)
   	  		  if(err){         //如果报错
   	  		  	console.log('getAllUsers Error'+err.message);          //把报错的 地方打印
   	  		  	return;
   	  		  }
   	  		  conn.release(); //释放连接
   	  		  callback(err,result)
   	  		  
   	  	})
   	  })
   }









router.get('/list',function(request,response){ //第一个请求参数，第二个响应参数
	getAllUsers(function(err,results){    //参数是一个函数
		if(err){
			response.send(err)
		}else if(results){
			console.log('>>>'+results);
			response.send(results);
		}
	})
	
	
	
	
	
	
	
	
	
	
	
//	console.log('it reading...');                 //打印在服务器
//	var id = request.query.id;
//	var count = request.query.count;
//	var price = request.query.price;
//	console.log(id)
//	console.log(count)
//	console.log(price)
//	response.send(
//		[{spending:[
//          {time:'jan',category:'shoping',count:2000},
//			{time:'feb',category:'shoping',count:3000},
//			{time:'march',category:'cart',count:500},
//			{time:'april',category:'traffic',count:100},
//			{time:'may',category:'cart',count:1000},
//			{time:'june',category:'cart',count:800},
//			{time:'july',category:'shoping',count:2000},
//			{time:'aug',category:'traffic',count:400},
//			{time:'sep',category:'traffic',count:500}	
//]}]			
//	);              
//	//打印在控制器
//})

//router.post('/list',function(request,response){ 
//	    console.log('post is ok');     
//     	var id = request.body.id;
//     	var count = request.body.count;
// 		var price = request.body.price;
//      console.log('姓名：'+id+'年龄：'+count+'班级：'+price);


})






module.exports = router;  //输出模块