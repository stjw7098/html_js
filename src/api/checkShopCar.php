<?php
	include 'connect.php';

	$user=$_GET['user'];


	$sql='select * from goods inner join shopcar on goods.id=shopcar.goods_number where shopcar.user="'.$user.'"';

	// select * from goods inner join shopcar on goods.id=shopcar.goods_number where shopcar.user='situ'

	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');

	$result=$conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>