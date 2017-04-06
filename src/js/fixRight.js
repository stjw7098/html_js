define(['jquery'],function(){
	var fixRight=function(){
		//回到顶部动画
		$('.fixRight .top').click(function(){
			$('body').animate({scrollTop:0});
			console.log('top')
		})
	}

	return fixRight;
})