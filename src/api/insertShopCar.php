<?php
	include 'connect.php';

	$id=$_GET['id'];
	$user=$_GET['user'];
	$count=$_GET['count'];

	//先查询数据库购物车表中是否有该商品，有就拿其主键id
	$check_sql="select id from shopcar where user="."'".$user."' and goods_number='".$id."'" ;

	// $insert_sql = "insert into shopcar(user,goods_number) values('".$user."','".$id."');";

	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');

	$result=$conn->query($check_sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);
	//$row是关联数组

	

	
	if($row){
		//说明数据库中已经存在该商品，修改数量即可

		//获取该商品于原本数量
		$check_sql2="select goods_count from shopcar where user="."'".$user."' and goods_number='".$id."'" ;

		$result = $conn->query('set names utf8');

		$result=$conn->query($check_sql2);

		$res = $result->fetch_all(MYSQLI_ASSOC);

		$oldCount=$res[0]['goods_count'];
		// echo $res[0]['goods_count'];

		$currentCount=$oldCount+$count;

		//获取到购物车表的主键id值
		$id=$row[0]['id'];
		// echo json_encode($row[0],JSON_UNESCAPED_UNICODE);
		    $insert_sql1="update shopcar set goods_count='".$currentCount."' where user='".$user."' and id='".$id."'";

		    $result2 = $conn->query('set names utf8');

		    $result2=$conn->query($insert_sql1);

		    echo $result2;


	}else{
		//不存在,直接数据库中添加该商品
		$insert_sql2= "insert into shopcar(user,goods_number,goods_count) values('".$user."','".$id."','".$count."');";

		$result = $conn->query('set names utf8');

		$result=$conn->query($insert_sql2);

	}

	


	
?>