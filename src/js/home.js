requirejs(['config'],function(){
	requirejs(['jquery','loginStatus','head'],function($,loginStatus,head){
		console.log($('.main'))
		
		$('.header').load('html/head.html',function(){
			//执行登录状态的判断，是否存在cookie
			loginStatus();
			head('html');
		});
		$('.main .fr').load('html/fixRight.html')
		$('.ppbox').load('html/pingpai.html');
		$('.footer').load('html/footer.html');


		
	})
			
})