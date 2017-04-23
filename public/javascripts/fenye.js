window.addEventListener('load',function(){
	var zhjcs =1;
	var dataaz;
	var total;
	var indexPage=1;
     	function Fnlist(){
		$.ajax({
			type: "get",
			url: 'http://localhost:9664/fenye/fenye',
			async: true,
			data:{
				cs:zhjcs-1
			},
	        success: function(data) {
	        	console.log(data);
	        	dataaz = data.list;
	        	total = data.total;
	        	$(".totalPage").text(data.total);
	        	$(".pagepage").text(data.totalPage)
				$(".page").text(indexPage)  
				console.log(indexPage)
	        	$('.zhj').children().remove();
	        	var html = '';
	            for(var i=0;i<data.list.length;i++){
	            	html+='<tr><td>'+data.list[i].username+'</td><td>'+data.list[i].uid+'</td><td>'+data.list[i].password+'</td><td>'+data.list[i].tel+'</td><td>'+data.list[i].regtime+'</td><td id = '+data.list[i].uid+'><button class="btn">修改</button><button class="btndel">删除</button><button id="btnxq">详情</button></td></tr>'
	            }
//				        	console.log(html)	            
	        	$('.zhj').append(html)
	        	
			       if(dataaz.length<5){
					console.log(dataaz)
					$(".bottomList").css('display','none');
					return;
				  }else{
				  	$(".bottomList").css('display','block');
				  }
		
	        }
	
	   })
		
	}
	Fnlist()
	
	//  上一页	
	$(".topList").click(function(){
		zhjcs--;
		indexPage--;
		if(zhjcs<0){
			zhjcs=0;
			return;
		}
		if(indexPage < 1){
			indexPage=1
			
		}
		Fnlist()
	})

//  下一页
var num = 0;
	$(".bottomList").click(function(){
//		num +=dataaz.length
		console.log(num)
//		if(num == total){			
//			$(".bottomList").css('display','none');
//			return;
//		}
//		console.log(total)
		zhjcs++;
		indexPage++;
		dataaz.startPag+=1;
		console.log()
		
		Fnlist()
		
		
	})

	
	
	
	
	
	
	
	
	
	
	
},false);
