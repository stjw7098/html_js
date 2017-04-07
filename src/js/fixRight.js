define(['jquery'],function(){
	var fixRight=function(){
		//回到顶部动画
		$('.fixRight .top').click(function(){
			$('body').animate({scrollTop:0});
			console.log('top')
		})

		$('.fixRight').on('mouseenter','a',function(){
			$(this).children('i').addClass('active').siblings('i').removeClass('active');
		}).on('mouseleave','a',function(){
				$(this).children('i').removeClass('active');

		})

		$('.fixRight .shopCar').on('click',function(){

				if($('.fixRight').hasClass('show')){
					$('.fixRight').animate({right:-270}).removeClass('show');
					$(this).children('i').removeClass('active');
				}else{
					$('.fixRight').animate({right:0}).addClass('show');
					$(this).children('i').addClass('active').siblings('i').removeClass('active');
				}
				
				
		})

		var user=getCookie('username');
		$.ajax({
			url:'http://localhost/myshoes/src/api/checkShopCar.php?user='+user,
			dataType:'JSON',
			success:function(data){
				console.log(data)
				var $content=$('.fixRight .cover .content');

				var total=0;
				for(var i=0;i<data.length;i++){
					total+=parseInt(data[i].price);
					$('<div/>').addClass('goods').attr('data-id',data[i].goods_number).html(`
						<div>
							<a href="#"><img src="${data[i].url}"></a>
						</div>
						<div>
							<a href="#" class="name">${data[i].name}</a>
							<p>￥${data[i].price}.00<a href="#">删除</a></p>
						</div>
						`).appendTo($content);
				}

				$('<div/>').addClass('left').html(`<p><span>${data.length}</span>件商品</p><p>共计:<span>￥${total}.00</span></p>`).appendTo('.cover .footer');
				$('<div/>').addClass('right').html(`<a href="#">去购物车结算</a>`).appendTo('.cover .footer');
			}
		})
	}

	return fixRight;
})