requirejs(['config'],function(){
	requirejs(['jquery','loginStatus','head','fixRight'],function($,loginStatus,head,fixRight){
		$('.header').load('head.html',function(){
			loginStatus();
			head();
		});
		$('.main .fr').load('fixRight.html',function(){
			fixRight();
		});
		$('.footer').load('footer.html');

		// var goodsId=location.search.split('=')[1];
		var user=getCookie('username');

		var allTotal=0;
		var num=0;
		//从数据库获取用户购物车数据
		$.ajax({
			url:'../api/checkShopCar.php?user='+user,
			dataType:'JSON',
			success:function(data){
				console.log(data)
				if(data.length>0){
					//走此处证明有用户购物车数据
					for(var i=0;i<data.length;i++){
						//某种商品的合计
						var total=Number(data[i].price)*Number(data[i].goods_count);
						//所有商品的合计
						allTotal+=total;
						//计算商品数量
						num+=parseInt(data[i].goods_count);
						$('<li/>').html(`
							<input type="checkbox">
							<a href="#"><img src="${data[i].url}"></a>
							<div class="name"><a href="#">${data[i].name}</a></div>
							<div>颜色:<span class="color" style="background-color:${data[i].color}"></div>
							<div class="price">￥${data[i].price}.00</div>
							<div class="num"><span>-</span><span>${data[i].goods_count}</span><span>+</span></div>
							<div class="total">￥${total}.00</div>
							<a href="#">删除</a>
							`).appendTo($('.lists'));

					}
					$('<div/>').addClass('left').html(`<p><span>${num}</span>件商品</p><p>共计:<span>￥${allTotal}.00</span></p>`).appendTo('.main .wrap');
					$('<div/>').addClass('right').html(`<a href="#">去结算</a>`).appendTo('.main .wrap');

					var $all=$('.selectAll input');
					$all.click(function(){
						if($('.selectAll input').is(':checked')){
							$('.lists li input').prop('checked',true);
						}else{
							$('.lists li input').prop('checked',false);
						}
					})
					
				}else{
					console.log(666)
				}
			}
		})

	})					
})