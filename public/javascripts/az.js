window.addEventListener('load',function(){
	
	$('.btn').click(function(){
		var text1=$('.text1').val();
		var text2=$('.text2').val();
		var text3=$('.text3').val();
		console.log(text1)
		console.log(text2)
		console.log(text3)
//		$.ajax({
//			type: "get",
//			url: "http://localhost:9664/item/list",
//			async: true,
//			data:{
//				id:text1,count:text2,price:text3
//			},
//			success: function(data) {
////				console.log(data[0].spending);
//				console.log(data)
////				for(var i=0;i<data[0].spending.length;i++){
////					console.log(data[0].spending[i].time);
////					console.log(data[0].spending[i].category);
////					console.log(data[0].spending[i].count);
////				}
//				text1='';
//				text2='';
//				text3='';
//			 }
//		  })
		
		$.ajax({
			type: "post",
			url: "http://localhost:9664/item/list",
			async: true,
			data:{
				'id':text1,'count':text2,'price':text3
			},
			success: function(data) {
				console.log(data)
				text1='';
				text2='';
				text3='';
			 }
		  })
		
		
		
		
		
	})
	
	
	
	
},false);