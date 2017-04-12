var express = require('express');          //引入express文件
var router = express.Router();             // 提取express的router方法
router.get('/list',function(request,response){    //第一个请求参数，第二个响应参数
	console.log('it reading...');                 //打印在服务器
	response.send('congrouteltion');              //打印在控制器
})



module.exports = router;  //输出模块