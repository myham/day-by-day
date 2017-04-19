window.addEventListener('load',function(){
	$('.btnlogin').click(function(){
		var user = $('.text').val();
		var pas = $('.password').val();
		if(user !='' && pas != ''){
			$.ajax({
						type: "post",
						url:"http://localhost:9664/login/login",
						async: true,
						data:{
							username:user,
							password:pas
							
						},
					        success:function(e) {					        						        	
					        	console.log(e);
					        	if(e.flag==1){
					        		console.log('登录成功')
					        	}else if(e.flag==2){
					        		console.log('用户不存在')
					        	}else if(e.flag==3){
					        		console.log('密码错误')
					        	}else{
					        		console.log('登录失败')
					        	}
					        		
					         }
					
		 			       })
		       }else{
		       	     alert('用户名或密码为空')
		       }		
	   })
	
})