define(['jquery'],function(){
	var head=function(path){
		if(path){
			path=path+'/';
		}else{
			path='';
		}
		// $('.allgoods').on('click','a',function(){
		// 	console.log($(this).attr('class'))
		// 	var type=$(this).attr('class');
		// 	location.href=path+'list.html?type='+type;
		// })
		
	}

	return head;
})