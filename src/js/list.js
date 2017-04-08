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

		var page=1;

		var timer;
		//列表懒加载
		window.onscroll=function(){
			if(window.scrollY>=document.body.scrollHeight-window.innerHeight-400){
				console.log(666)
				if(timer){
					return;
				}
				timer=setTimeout(function(){
					getList();
				},500)
			}
			
		}
		var $goodsNumber=$('<p/>');


		getList();

		function getList(){
			//通过ajax请求获取数据库type类型数据
			$.ajax({
				url:'../api/list.php?type='+type+'&page='+page,
				dataType:'JSON',
				success:function(data){
					page++;
					timer=undefined;

					
					// $('<div/>').html(`<a href="#">价格由低到高</a>`).appendTo($('.list header'));
					for(var i=0;i<data.length;i++){
						//拿到每个商品的id编号，并且给a标签设置地址
						var goodsId=data[i].id;
						var url="goods.html?id="+goodsId;

						console.log($(this).attr('data-id'))
						$('<li/>').html(`<div><a href="${url}" data-id="${goodsId}"><img src=${data[i].url}></a></div>
							<div><p class="price">￥${data[i].price}<s>￥${data[i].oldprice}</s></p>
							<p>${data[i].name}</p><p>尺码:${data[i].size}</p></div>`).appendTo($('.list ul'));
					}

					//获取总共商品数量
					var lis=$('.list ul').children('li').length;
					$goodsNumber.html(`总共找到<span>${lis}</span>个商品`).appendTo($('.list header'));
					
				}
			})
		}

		
	})
			
})