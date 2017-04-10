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
							<input class="buy" type="checkbox" checked>
							<a href="http://localhost/myshoes/src/html/goods.html?id=${data[i].goods_number}"><img src="${data[i].url}"></a>
							<div class="name"><a href="http://localhost/myshoes/src/html/goods.html?id=${data[i].goods_number}">${data[i].name}</a></div>
							<div>颜色:<span class="color" style="background-color:${data[i].color}"></div>
							<div class="price">￥<span>${data[i].price}</span>.00</div>
							<div class="num"><span class="jian">-</span><input type="text" value="${data[i].goods_count}"><span class="add">+</span></div>
							<div class="total">￥<span>${total}</span>.00</div>
							<a class="delete">删除</a>
							`).appendTo($('.lists'));

					}
					$('<div/>').addClass('footer_left').html(`<p><span>${num}</span>件商品</p><p>共计:<span>￥${allTotal}.00</span></p>`).appendTo('.main .wrap');
					$('<div/>').addClass('footer_right').html(`<a href="#">去结算</a>`).appendTo('.main .wrap');

					var $all=$('.selectAll input');
					$all.click(function(){
						if($('.selectAll input').is(':checked')){
							$('.lists li input').prop('checked',true);
						}else{
							$('.lists li input').prop('checked',false);
						}
					})

					//一上来就判断给已经选择的商品效果
					if($('.lists .buy').is(':checked')){
						$('.lists .buy').parent().addClass('select')
					}else{
						$('.lists .buy').parent().removeClass('select')
					}

					//某个商品的选择效果
					$('.lists').on('click','.buy',function(){
						if($(this).is(':checked')){
							$(this).parent().addClass('select')
						}else{
							$(this).parent().removeClass('select')
						}
					})

					//全选效果
					$('.selectAll').on('click','input',function(){
						if($(this).is(':checked')){
							$('.lists .buy').parent().addClass('select')
						}else{
							$('.lists .buy').parent().removeClass('select')
						}
					})


					//减少数量事件
					$('.jian').click(function(e){
						var currentNum=$(this).next().val();
						var currentTotal=$(this).parent().next().children('span').text();
						var danjia=$(this).parent().prev().children('span').text();
						$(this).next().val(currentNum-1);

						$(this).parent().next().children('span').text(Number(currentTotal)-Number(danjia));
						e.preventDefault();
					})

					//增加数量事件
					$('.add').click(function(e){
						var currentNum=$(this).prev().val();
						var currentTotal=$(this).parent().next().children('span').text();
						var danjia=$(this).parent().prev().children('span').text();
						$(this).prev().val(Number(currentNum)+1);
						$(this).parent().next().children('span').text(Number(currentTotal)+Number(danjia));
						e.preventDefault();
					})
					
				}else{
					console.log(666)
				}
			}
		})

	})					
})