requirejs(['config'],function(){
	requirejs(['jquery','loginStatus','head','fixRight'],function($,loginStatus,head,fixRight){
		
		$('.header').load('head.html',function(){
			loginStatus();
			head();
		});
		$('.main .fr').load('fixRight.html',function(){
			fixRight();
		});
		$('.ppbox').load('pingpai.html');
		$('.footer').load('footer.html');
		
		//通过search方法获取路径?后的内容，最终获取商品类型
		var type=location.search.split('=')[1];
		console.log(type)
		//通过ajax请求获取数据库type类型数据
		$.ajax({
			url:'../api/list.php?type='+type,
			dataType:'JSON',
			success:function(data){
				$('<p/>').html(`总共找到<span>${data.length}</span>个商品`).appendTo($('.list header'));
				$('<div/>').html(`<a href="#">价格由低到高</a>`).appendTo($('.list header'));
				for(var i=0;i<data.length;i++){
					// console.log(data[i].url);
					var goodsId=data[i].id;
					var url="goods.html?id="+goodsId;
					console.log($(this).attr('data-id'))
					$('<li/>').html(`<div><a href="${url}" data-id="${goodsId}"><img src=${data[i].url}></a></div>
						<div><p class="price">￥${data[i].price}<s>￥${data[i].oldprice}</s></p>
						<p>${data[i].name}</p><p>尺码:${data[i].size}</p></div>`).appendTo($('.list ul'));
				}
				// console.log(data)
				// getDetail();
			}
		})	

		// function getDetail(){
		// 	console.log(666)
		// 	$('.list ul').on('click','a',function(e){
		// 		var goodsId=$(this).attr('data-id');
		// 		console.log($(this).attr('data-id'))
		// 		$(this).href="goods.html?id="+goodsId;
		// 		// return false;
		// 	})
		// }	
	})
			
})