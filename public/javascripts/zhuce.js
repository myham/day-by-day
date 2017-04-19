window.addEventListener('load',function(){
		 var code;
		
		$('#code').bind('click',function(){
			createCode()
		})
	
	function createCode() {
			code = '';
			var codeLength = 4;
			var codeV = document.getElementById('code');
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
			for(var i = 0; i < codeLength; i++) {
				var index = Math.floor(Math.random() * 36);
				code += random[index];
			}
			codeV.value = code;
		}
	
	$('.btn').click(function(){
		    	var user = $('.text').val();
		     	var pas = $('.password').val();
		      	var email = $('.email').val();
		        var tel = $('.tel').val();

     
						$.ajax({
						type: "post",
						url:"http://localhost:9664/zhuce/zhuce",
						async: true,
						data:{
							username:user,
							password:pas,
							time:email,
							tel:tel
						},
					        success:function(e) {					        						        	
					        		user='';
						        	pas='';
						        	email='';
						        	tel='';
					        	console.log(e)
					        	if(e.flag == 1){					        		
					        		console.log('注册成功')
					        	}else if(e.flag == 2){
					        		console.log('用户名已有')
					        	}else{
					        		console.log('注册失败')
					        	}
					         }
					
					       })
				
		
		
		
	}
		
	})
	
	
	
	
//	验证码
//	   var code;
//		
//		$('#code').bind('click',function(){
////			alert(1)
//			createCode()
//		})
		
//		$("#cc").bind('click',function(){
//			validate()
//		})
		
//		function createCode() {
//			//首先默认code为空字符串
//			code = '';
//			//设置长度，这里看需求，我这里设置了4
//			var codeLength = 4;
//			var codeV = document.getElementById('code');
//			//设置随机字符
//			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
//			//循环codeLength 我设置的4就是循环4次
//			for(var i = 0; i < codeLength; i++) {
//				//设置随机数范围,这设置为0 ~ 36
//				var index = Math.floor(Math.random() * 36);
//				//字符串拼接 将每次随机的字符 进行拼接
//				code += random[index];
//			}
//			//将拼接好的字符串赋值给展示的Value
//			codeV.value = code;
//		}

		//下面就是判断是否== 的代码，无需解释
//		function validate() {
//			var oValue = document.getElementById('input').value.toUpperCase();
//			if(oValue == 0) {
//				alert('请输入验证码');
//			} else if(oValue != code) {
//				alert('验证码不正确，请重新输入');
//				oValue = ' ';
////				createCode();
//			} else {
//				alert(666)
//				//          window.open('http://www.baidu.com','_self');
//			}
////		}

		//设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
//		window.onload = function() {

//			createCode();
//		}
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);
