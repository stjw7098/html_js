requirejs(['config'],function(){
	requirejs(['jquery','head','loginStatus'],function($,head,loginStatus){
		
		$('.header').load('../html/head.html',function(){
			loginStatus();
			head();
		});
		// $('.ppbox').load('../html/pingpai.html');
		$('.footer').load('../html/footer.html');

		var goodsId=location.search.split('=')[1];

		$.ajax({
			url:'../api/goods.php?id='+goodsId,
			dataType:'JSON',
			success:function(data){
				console.log(data);
				var count=(data[0].price/data[0].oldprice*10).toFixed(1);
				var jiesheng=(data[0].oldprice-data[0].price);
				console.log(count,jiesheng)
				$('<div/>').attr('class','left').html(`<img src="${data[0].url}">`).appendTo($('.goods_info'))
				$('<div/>').attr('class','right').html(`<h4>${data[0].name}<a href="#">更多</a></h4>
					<div class="content">
						<p>吊牌价  :   <s>${data[0].oldprice}</s></p>
						<p>销售价  :   <span class="price">￥${data[0].price}.00</span>  (${count}折)  立省:￥${jiesheng}.00</p>
						<p>颜色  :   ${data[0].color}</p>
						<p>尺码  :   ${data[0].size}</p>
						<p>运费  :   名鞋库会员满399包邮(不包括货到付款)</p>
					</div>
					<p class="cuxiao"><span>促销信息</span><span>满减促销: 满299减10 满599减20 满999减50   限购3件</span></p>`).appendTo($('.goods_info'));
			}
		})
	})
			
})