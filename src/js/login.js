requirejs(['config'],function(){
	requirejs(['jquery','common'],function(){
		
		$('.header').load('../html/head.html');
		$('.footer').load('../html/footer.html');

		//一上来就获取cookie
		var oldname=getCookie('username');
		var oldpwd=getCookie('pwd');

		var rd=randomNum(1000,9999);
		$('.result').html(rd);
		
		// $('form').on('change','span',function(e){
		// 	console.log(666)
		// 	if(e.target.className==='userspan'){
		// 		if($('#user').val().lenght<10){
		// 			$('.userspan').html('用户名长度至少为10');
		// 		}
		// 	}
		// })
		

		//修改验证码
		$('.replace').click(function(e){
			var rd=randomNum(1000,9999);
			$('.result').html(rd);
			e.preventDefault();
		})

		//点击登录
		$('.log').click(function(e){
			e.preventDefault();

			var _username=$('#user').val();
			var _password=$('#pwd').val();

			if($('#code').val()!==$('.result').html()){
				alert('验证码错误');
				return;
			}


			//点击登录后核对后台数据
			$.ajax({
				url:'../api/userlist.php',
				type:'post',
				data:{username:_username,password:_password},
				// data:'username='+_username&'&password='+_password,
				dataType:'JSON',
				success:function(data){
					console.log(data)
					if(data.length>0){
						for(var i=0;i<data.length;i++){
							if(data[i].password===_password){
								location.href='http://localhost/myshoes/src/index.html';

								//设置账户，密码为7天的cookie
								var date=new Date();
								date.setDate(date.getDate()+7);
								setCookie('username',_username,date,'/');
								setCookie('pwd',_password,date,'/');	
								
							}else{
								alert('用户名或者密码错误')
							}
						}

						
						
					}else{
						alert('用户名或者密码错误')
					}
					
				}
			})
			
		})

	})
			
})