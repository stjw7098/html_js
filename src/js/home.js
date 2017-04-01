requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		console.log($('.main'))
		
		$('.header').load('html/head.html');
		$('.ppbox').load('html/pingpai.html');
		$('.footer').load('html/footer.html');
	})
			
})