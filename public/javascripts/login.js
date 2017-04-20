window.addEventListener('load',function(){
	if(sessionStorage){
	$('.text').val(sessionStorage.user_name);
	$('.password').val(sessionStorage.pass)
	};
	 
	 createCode();
//  验证码	
	 var code;
	 function createCode() {
			//首先默认code为空字符串
			code = '';
			//设置长度，这里看需求，我这里设置了4
			var codeLength = 4;
			var codeV = document.getElementById('code');
			//设置随机字符
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
			//循环codeLength 我设置的4就是循环4次
			for(var i = 0; i < codeLength; i++) {
				//设置随机数范围,这设置为0 ~ 36
				var index = Math.floor(Math.random() * 36);
				//字符串拼接 将每次随机的字符 进行拼接
				code += random[index];
			}
			//将拼接好的字符串赋值给展示的Value
			codeV.value = code;
		}
	 
	 //下面就是判断是否== 的代码，无需解释
		function validate() {
			var oValue = document.getElementById('input').value.toUpperCase();
			if(oValue == 0) {
				alert('请输入验证码');
			} else if(oValue != code) {
				alert('验证码不正确，请重新输入');
				oValue = ' ';
				createCode();
			} else {
				alert(666)
				//          window.open('http://www.baidu.com','_self');
			}
		}

		//设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空

	 
	 $('#code').click(function(){
	 	createCode()
	 })
	 $("#cc").click(function(){
	 	validate()
//	 	alert($("#input").val())
//	 	alert($("#code").val())
	 })
	 
	 
	 
	$('.btnlogin').click(function(){
		var user = $('.text').val();
		var pas = $('.password').val();
		
		if(user !='' && pas != ''){
			if($("#input").val() == $("#code").val()){
				$.ajax({
						type: "post",
						url:"http://localhost:9664/login/login",
						async: true,
						data:{
							username:user,
							password:MD5(pas) 
							
						},
					        success:function(e) {					        						        	
					        	console.log(e);
					        	if(e.flag==1){
					        		console.log('登录成功');
					        		location.href='list.html';
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
		            	alert("您的验证码输入错误")
		            }
												
			  }else{
		       	     $(".wrapper").css("display","block");
		       	     $(".dell").click(function(){
		       	     	 $(".wrapper").css("display","none");
		       	     })
		       }
				       
	   })
	
	//  点击注册时
	$(".btnzhuce").click(function(){
		location.href='zhuce.html';
	})
	
	
	
	
	
	
	
	
	
})