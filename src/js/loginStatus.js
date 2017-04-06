define(['common','jquery'],function(){

	var qq=function(){
		var username=getCookie('username');
		var password=getCookie('pwd');
		if(username&&password){
			$('.loginbar ul .secondLi').remove();
			$('.loginbar ul .firstLi').html(`欢迎您,<a href="#" class="info">${username}</a>！<a href="#" class="logout">[退出]</a>`);		
		}else{
			return;
		}

		$('.loginbar .logout').click(function(){
			var date=new Date();
			date.setDate(date.getDate()-8);
			setCookie('username',username,date,'/');
			setCookie('pwd',password,date,'/');
			location.reload();
		})
	}
	return qq;
})