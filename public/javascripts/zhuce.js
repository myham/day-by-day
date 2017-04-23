window.addEventListener('load',function(){	
	$('.btn').click(function(){
		    	var user = $('.text').val();
		     	var pas = $('.password').val();
		      	var email = $('.email').val();
		        var tel = $('.tel').val();
                var picture = $('.file').val()
                
     
						$.ajax({
						type: "post",
						url:"http://localhost:9664/zhuce/zhuce",
						async: true,
						data:{
							username:user,
							password:MD5(pas),
							tel:tel,
							pic:picture
						},
					        success:function(data) {					        						        	console.log(data)
					        	sessionStorage.setItem('user_name',user);
	sessionStorage.setItem('pass',pas)
					        	
					        	if(data.flag == 1){					        		                            
					        		location.href='login.html';
					        		console.log('注册成功')
					        	}else if(data.flag == 2){
					        		console.log('用户名已有')
					        	}else{
					        		console.log('注册失败')
					        	}
					         }
					
					       })
		
	         })	
	
},false);
