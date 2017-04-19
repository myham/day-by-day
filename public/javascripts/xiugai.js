window.addEventListener('load',function(){
	var id =  location.href.split('=')[1];
//	var uid = location.search.substring(4)
//	alert('id'+id)
	
	$.ajax({
			type: "get",
			url: "http://localhost:9664/xiugai/xiugai?id="+id,
			async: true,
	        success: function(data) {
	        	console.log(data);
                $('#xtext').val(data.results[0].username)
                $('#xword').val(data.results[0].password)
                $('#xtel').val(data.results[0].tel)
                $('#xtime').val(data.results[0].regtime)
	        }
	
	  })
	
	
	
	$('#xbtn').click(function(){
		    var xtext = $('#xtext').val();
		    var xword = $('#xword').val();
		    var xtel = $('#xtel').val();
		    var xtime = $('#xtime').val();
		    
		    
		    $.ajax({
			type: "post",
			url: "http://localhost:9664/xiugai/xiugai",
			async: true,
			data:{
				id:id,
				username:xtext,
				password:xword,
				tel:xtel,
				regtime:xtime
			},
	        success: function(data) {
	        	console.log(data);
                
	        }
	
	      })		    				    
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);