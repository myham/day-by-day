window.addEventListener('load',function(){
	var files;
	
	$('.file').change(function(){		
		files = this.files;
		console.log(files);
																		
	})

//var setfile=function(element){
// 	  console.log(element.files);
//// 	  files = element.files[0]
// }

//	$('.btn').click(function(){	
//		console.log(files)
//          var fd = new FormData();
//          fd.append("files",files)
//          console.log(fd.get("files"))
//						$.ajax({
//						type: "post",
//						url:"http://localhost:9664/zhuce/file",
//						async: true,
//						contentType:false,
//						processData:false,
//						data:fd,
//					   	success:function(data) {
//					   		console.log(data);
////					   	    $('aa').css('display','block')
////					   	    $('.aa').html(data)					   						    
//					    }
//					
//					})
//		
//	         })	

		function aa (){
			var fd = new FormData();
            fd.append("files",files)
            console.log(fd.get("files"))
						$.ajax({
						type: "post",
						url:"http://localhost:9664/zhuce/file",
						async: true,
						contentType:false,
						processData:false,
						data:fd,
					   	success:function(data) {
					   		console.log(data);
//					   	    $('aa').css('display','block')
//					   	    $('.aa').html(data)					   						    
					    }
					
					})
		}
	
},false);
