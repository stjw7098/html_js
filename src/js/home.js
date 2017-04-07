requirejs(['config'],function(){
	requirejs(['jquery','loginStatus','head','fixRight'],function($,loginStatus,head,fixRight){
		console.log($('.main'))
		
		$('.header').load('html/head.html',function(){
			//执行登录状态的判断，是否存在cookie
			loginStatus();
			head('html');
		});
		$('.main .fr').load('html/fixRight.html',function(){
			fixRight();
		})
		$('.ppbox').load('html/pingpai.html');
		$('.footer').load('html/footer.html');

		//获取轮播图列表ul
		var $lis=$('.banner ul').children('li');

		var $p=$('<p/>');
		for(var i=0;i<$lis.length;i++){
			var $span=$('<span/>');
			$span.appendTo($p);
			if(i===0){
				$span.addClass('active');
			}
			
		}
		var left=($('.banner').width()-$p.width())/2;
		
		$('.banner').append($p);
		
		$('.banner p').css('left',left-20);

		//轮播定时器，显示动画
		$lis.eq(0)
		bannerAnimate();

		var timer;
		var index=1;
		function bannerAnimate(){
			
			timer=setInterval(function(){
				if(index===4){
					index=0;
				}
				$('.banner p').children('span').eq(index).addClass('active').siblings('span').removeClass('active');
				$lis.eq(index).fadeIn(1000).siblings('li').fadeOut(700);
				index++;
			},3000)
		}
		

		$('.banner').mouseenter(function(){
			clearInterval(timer);
		}).mouseleave(function(){
			bannerAnimate();
		})

		//轮播图小圆点改变轮播图动画
		$('.banner p').on('mouseenter','span',function(){
			$(this).addClass('active').siblings('span').removeClass('active');
			index=$(this).index();
			$lis.eq(index).fadeIn(1000).siblings('li').fadeOut(700);
		})
		


		
	})
			
})