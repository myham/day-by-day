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
// 	  		  console.log(result)
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



//   删除
   function delAllUsers(uid,callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'delete from user where uid = ?';
   	  	conn.query(sql,[uid],function(err,result){
// 	  		  console.log('result:'+result)
   	  		  callback(err,result)
   	  	})
   	  })
   }

router.get('/del',function(req,response){
      var id = req.query.id;
      console.log(id)
    
//  修改数据
    delAllUsers(id,function(err,results){    //参数是一个函数
		if(err){
			console.log('删除失败')
			response.send(err)
		}else if(results){
			console.log('删除成功');
			response.send({results:1});
		}
	})            
})


//搜索

  //获取表信息
   function seachAllUsers(uname,pas,callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from user where username like ? or password like ?';
// 	  		console.log('conn'+conn)
   	  	conn.query(sql,['%'+uname+'%','%'+pas+'%'],function(err,result){
// 	  		  console.log('result:'+result)
   	  		  callback(err,result)
   	  		   conn.release(); //释放连接
   	  	})
   	  })
   }

   router.get('/seach',function(req,response){
         var wen = req.query.scTxt
         console.log(wen)
// 查询数据
    seachAllUsers(wen,wen,function(err,results){    //参数是一个函数
		if(err){
			console.log('搜索失败')
			response.send(err)
		}else if(results){
			console.log('搜索成功');
			response.send({results:results});
		}
	}) 
})



//  分页数据
// 先获取列表信息
function getUsers(callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from user';
   	  	conn.query(sql,function(err,result){	  		 
   	  		var total = result.length;
   	  		conn.release(); //释放连接
   			callback(err,total) 
   	  	})   	  
   	 }) 	
   }

//  结果
   function getResults(chushi,callback){
   	   var pageSize = 5;
   	   var startPage = chushi*pageSize;  //当前页	   	
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from user limit ? , ?';
   	  	conn.query(sql,[startPage,pageSize],function(err,result){
           if(err){
           	   console.log('total_Erro:'+err.message);
           	   return
           }
   	  		  callback(err,result,pageSize)
   	  		   conn.release(); //释放连接
   	  	 })
   	  })
   }


 router.get('/fenye',function(req,response){
         var cs = Number(req.query.cs);
         console.log('cs:'+cs);
         var total=0;
         
        getUsers(function(err,total){
        	if(err){
        		console.log('报错');
        	}else if(total){
        		console.log('成功')
        		total = total;
		 getResults(cs,function(err,reslist,pageSize){
		    	var totalPage = Math.ceil(total/pageSize);
		    	var data = {total:total,pageSize:pageSize,totalPage:totalPage,list:reslist}
		    	response.send(data)
		      })        		        		        		
        	}
        })

})













module.exports = router;  //输出模块