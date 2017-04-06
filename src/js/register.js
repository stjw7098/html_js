requirejs(['config'],function(){
	requirejs(['jquery'],function(){
		
		$('.header').load('head.html');
		$('.footer').load('footer.html');
		
		var _username;

		//定义方法检测账户是否存在数据库
		function noRepeatUser(){
			$.ajax({
				url:'../api/userlist.php',
				dataType:'JSON',
				type:'post',
				data:{username:_username},
				success:function(data){
					$('.userspan').html('');
					for(var i=0;i<data.length;i++){
						if(data[i].username===_username){
							$('.userspan').html('用户名已经存在了');
						}
					}
				}
			})
		}
		$('#user').on('input',function(e){
			_username=$('#user').val();
			
			//判断用户名是否已在数据库中存在
			noRepeatUser();
			
		})

		$('#pwd').change(function(e){
			if($('#pwd').val().length<6){
				$('.pwdspan').html('密码长度至少为6');
			}else{
				$('.pwdspan').html('');
			}
		})
		$('#pwdAgain').change(function(e){
			if($('#pwd').val()!==$('#pwdAgain').val()){
				$('.pwdAgainSpan').html('两次密码不一致');
			}else{
				$('.pwdAgainSpan').html('');
			}
		})

		$('.register').click(function(e){
			e.preventDefault();

			_username=$('#user').val();
			_pwd=$('#pwd').val();

			if($('#pwd').val().length<6){
				return false;
			}
			if(!$('.cbrule').prop('checked')){
				alert('必须同意协议');
				return false;
			}

			$.ajax({
				url:'../api/userlist.php',
				dataType:'JSON',
				type:'post',
				data:{username:_username},
				success:function(data){
					$('.userspan').html('');
					for(var i=0;i<data.length;i++){
						if(data[i].username===_username){
							alert('用户名已经存在了');
							return false;
						}
					}

					//账户不存在的话直接插入数据库
					$.ajax({
						url:'../api/register.php',
						type:'post',
						data:{username:_username,password:_pwd},
						success:function(data){
							$('form').html(`<p class="rigSuc">注册成功！</p><p class="rigSuc">${_username}您好，欢迎来到名鞋库！</p><a class="nowLog" href="http://localhost/myshoes/src/html/login.html">立即登录</a>`)
						}
					})		
				}
			})

			
			
		})
	})
			
})