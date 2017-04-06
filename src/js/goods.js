requirejs(['config'],function(){
	requirejs(['jquery','head','loginStatus','gdszoom'],function($,head,loginStatus,gdszoom){
		$('.header').load('../html/head.html',function(){
			loginStatus();
			head();
		});
		$('.fr').load('../html/fixRight.html');
		// $('.ppbox').load('../html/pingpai.html');
		$('.footer').load('../html/footer.html');

		var goodsId=location.search.split('=')[1];

		//通过ajax请求获取商品数据
		$.ajax({
			url:'../api/goods.php?id='+goodsId,
			dataType:'JSON',
			success:function(data){
				console.log(data);
				var count=(data[0].price/data[0].oldprice*10).toFixed(1);
				var jiesheng=(data[0].oldprice-data[0].price);

				var url=data[0].url.split('?')[0];
				$('<div/>').attr('class','left').html(`<img src="${url}">`).appendTo($('.goods_info'));
				
				$('<div/>').attr('class','right').html(`<h4>${data[0].name}<a href="#">更多</a></h4>
					<div class="content">
						<p>吊牌价  :   <s>￥${data[0].oldprice}.00</s></p>
						<p>销售价  :   <span class="price">￥${data[0].price}.00</span>  (${count}折)  立省:￥${jiesheng}.00</p>
						<p>颜色  :   <span class="color" style="background-color:${data[0].color}"></span></p>
						<p>尺码  :   ${data[0].size}</p>
						<p>运费  :   名鞋库会员满399包邮(不包括货到付款)</p>
					</div>
					<p class="cuxiao"><span>促销信息</span><span>满减促销: 满299减10 满599减20 满999减50   限购3件</span></p>
					<div class="option"><a href="#" class="buy"></a><a href="#" class="shop_car"></a></div>
					<p class="service"><i>名鞋库保障:</i>
					    		<img src="../img/zheng.png">  正品认证  
					    		<img src="../img/tui.png">  自由退货  
					    		<img src="../img/mian.png">  全场满399包邮  </p>`).appendTo($('.goods_info'));
				
				// 查询数据库中的该商品图片有多少张
				var arr=data[0].url.split('?');

				//创建容器装载小图片
				$('<ul/>').attr('class','smallImgContent').appendTo($('.goods_info'));

				//加载往前翻小图片
				$('.smallImgContent').append(`<i><img src="../img/prev.png"></i>`);
				//生成小图片
				for(var i=0;i<arr.length;i++){
					var path=arr[i];
					$('.smallImgContent').append(`<li><img src="${path}"></li>`);

					//给第一张小图片默认样式
					if(i===0){
						$('.smallImgContent').children('li').attr('class','active');
					}
				}
				//加载往后翻小图片
				$('.smallImgContent').append(`<i><img src="../img/next.png"></i>`)
				
				//鼠标移入显示相应小图和大图
				$('.smallImgContent').on('mouseenter','li',function(){
					$(this).addClass('active').siblings().removeClass('active');

					var currentImgUrl=$(this).children('img').attr('src');
					$('.left').children('img').attr('src',currentImgUrl);

					//调用放大镜插件
					$('.left').gdszoom({width:500,height:430,gap:6});

				});


				$('.left').gdszoom({width:500,height:430,gap:6});

				

				//加入购物车事件
				$('.shop_car').click(function(e){
					e.preventDefault();

					

					//获取本页面的商品id
					var id=location.search.split('=')[1];

					var username=getCookie('username');
					console.log(username,id)
					if(username){
						// 飞入购物车效果 
						showCarAnimate();

						//为该用户给后台添加该商品
						$.ajax({
							url:'../api/insertShopCar.php?user='+username+'&id='+id,
							success:function(data){
								console.log(data)
							}
						})
					}else{
						alert('很抱歉！请先登录再进行购买');
					}
				})


				

				function showCarAnimate(){
					var cloneImg=$('.left img').clone().addClass('cloneImg').appendTo($('.goods_info'));
					
					var _left=window.innerWidth-$('.fixRight .box').width();
					var _top=$('.fixRight .box .shopCar').offset().top-cloneImg.offset().top+37;

					$(cloneImg).animate({left:_left-15,top:_top-100,width:30,height:30},1000,function(){
						$(cloneImg).animate({left:_left-15,top:_top,opacity:0},function(){
							$(cloneImg).remove();
						});

					})
				}

			}
		})
	})
			
})