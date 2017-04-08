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
				var $content=$('.fixRight .cover .content');

				//大于0表示获取到了用户的购物车数据
				if(data.length>0){
					var total=0;
					var num=0;
					//生成所有商品的列表
					for(var i=0;i<data.length;i++){
						//计算商品数量
						num+=parseInt(data[i].goods_count);
						//计算商品总额
						total+=parseInt(data[i].goods_count*data[i].price);
						$('<div/>').addClass('goods').attr('data-id',data[i].goods_number).html(`
							<div>
								<a href="#"><img src="${data[i].url}"></a>
							</div>
							<div>
								<a href="http://localhost/myshoes/src/html/goods.html?id=${data[i].goods_number}" class="name">${data[i].name}</a>
								<p>￥${data[i].price}.00    <span>&times;${data[i].goods_count}</span><a href="#">删除</a></p>
							</div>
							`).appendTo($content);
					}

					//商品购物车的底部结构
					$('<div/>').addClass('left').html(`<p><span>${num}</span>件商品</p><p>共计:<span>￥${total}.00</span></p>`).appendTo('.cover .footer');
					$('<div/>').addClass('right').html(`<a href="http://localhost/myshoes/src/html/shopCar.html">去购物车结算</a>`).appendTo('.cover .footer');

					//更新head部分里面的购物车标签里的商品数量内容
					$('.logo .shopCar .num').text(num);
				}else{
					
					$content2=$('<div/>').html(`<div class="carnull"><p></p>购物车空空的，赶快去挑选心仪的商品吧~<a href="http://localhost/myshoes/src/index.html">去首页逛逛</div>`);

					$content.append($content2);
					//商品购物车的底部结构
					$('<div/>').addClass('left').html(`<p><span>0</span>件商品</p><p>共计:<span>￥0.00</span></p>`).appendTo('.cover .footer');
					$('<div/>').addClass('right').html(`<a href="http://localhost/myshoes/src/html/shopCar.html">去购物车结算</a>`).appendTo('.cover .footer');
				}
				
			}
		})
	}

	return fixRight;
})