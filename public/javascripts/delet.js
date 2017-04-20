window.addEventListener('load',function(){
	//    删除页	
	$('.zhj').delegate('.btndel','click',function(){
		$(".wrapper").css('display','block');
				var id = $(this).parent().attr("id")
				var _this = $(this)
		$(".dell").click(function(){
			$(".wrapper").css('display','none')
//			var index = $("#btndel").index(this)
			
			console.log(id)
		
			$.ajax({
				type: "get",
				url: "http://localhost:9664/xiugai/del?id="+id,
				async: true,
		        success: function(data) {
		        	console.log(data);
		        		_this.parent().parent().remove()
		        	if(data.results==1){
		        		console.log('删除成功');
		        		
		        	}
		        	
		        }
		
		    })						
		})
		
		
	    $('.cuo').click(function(){
	    	$(".wrapper").css('display','none')
	    })
	
	})
	
	
	
	
},false);