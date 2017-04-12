var express = require('express');          //引入express文件
var router = express.Router();             // 提取express的router方法
router.get('/list',function(request,response){    //第一个请求参数，第二个响应参数
	console.log('it reading...');                 //打印在服务器
	var id = request.query.id;
	var count = request.query.count;
	var price = request.query.price;
	console.log(id)
	console.log(count)
	console.log(price)
	response.send(
		[{spending:[
            {time:'jan',category:'shoping',count:2000},
			{time:'feb',category:'shoping',count:3000},
			{time:'march',category:'cart',count:500},
			{time:'april',category:'traffic',count:100},
			{time:'may',category:'cart',count:1000},
			{time:'june',category:'cart',count:800},
			{time:'july',category:'shoping',count:2000},
			{time:'aug',category:'traffic',count:400},
			{time:'sep',category:'traffic',count:500}	
]}]			
	);              
	//打印在控制器
})

router.post('/list',function(request,response){ 
	    console.log('post is ok');     
       	var id = request.body.id;
       	var count = request.body.count;
   		var price = request.body.price;
        console.log('id'+id+'count'+count+'price'+price);
})








module.exports = router;  //输出模块