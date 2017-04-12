window.addEventListener('load',function(){
	$.ajax({
			type: "get",
			url: "http://localhost:9664/item/list",
			async: true,
			success: function(data) {
				console.log(data);				
				
			 }
		  })
	
	
	
},false);