requirejs(['config'],function(){
	requirejs(['jquery','loginStatus','head'],function($,loginStatus,head){
		$('.header').load('head.html',function(){
			loginStatus();
			head();
		});
		$('.main .fr').load('fixRight.html');
		$('.footer').load('footer.html');

		// var goodsId=location.search.split('=')[1];
		var user=getCookie('username');

		//从数据库获取用户购物车数据
		$.ajax({
			url:'../api/checkShopCar.php?user='+user,
			dataType:'JSON',
			success:function(data){
				console.log(data)
				if(data.length>0){
					//走此处证明有用户购物车数据
				}else{
					console.log(666)
				}
			}
		})

	})					
})