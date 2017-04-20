window.addEventListener('load',function(){
	$(".seachBtn").click(function(){		
		 schTxt = $(".seachTxt").val();
		console.log(schTxt)
	     $.ajax({ 
						type: "get",
						url: "http://localhost:9664/xiugai/seach",
						async: true,
						data:{
							scTxt:schTxt
						},
				        success: function(data) {
				        	$('.zhj').children().remove();
							console.log(data)
				        	console.log(data.results.length)

				        	var html = '';
	            for(var i=0;i<data.results.length;i++){
	            	html+='<tr><td>'+data.results[i].username+'</td><td>'+data.results[i].uid+'</td><td>'+data.results[i].password+'</td><td>'+data.results[i].tel+'</td><td>'+data.results[i].regtime+'</td><td id = '+data.results[i].uid+'><button class="btn">修改</button><button class="btndel">删除</button><button id="btnxq">详情</button></td></tr>'
	            }
//				        	console.log(html)
	            
	        	$('.zhj').append(html)
				        }
						
				      })
		
			})	
			
			
//			console.log(schTxt)
			
		    $(".seachTxt")[0].addEventListener('input',function(){
		    	if($(".seachTxt").val() == ''){
		    		aaa()
		    	}
		    })
				
		
			function aaa(){
				$.ajax({
				type: "get",
				url: "http://localhost:9664/item/list",
				async: true,
		        success: function(data) {
		        	$('.zhj').children().remove();
		        	console.log(data);
		        	html = '';
		            for(var i=0;i<data.length;i++){
		            	html+='<tr><td>'+data[i].username+'</td><td>'+data[i].uid+'</td><td>'+data[i].password+'</td><td>'+data[i].tel+'</td><td>'+data[i].regtime+'</td><td id = '+data[i].uid+'><button class="btn">修改</button><button class="btndel">删除</button><button id="btnxq">详情</button></td></tr>'
		            }
		        	$('.zhj').append(html)
		        }
		
		       })
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		},false);