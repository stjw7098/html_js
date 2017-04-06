<?php
	include 'connect.php';

	$id=$_GET['id'];


	$sql='select goods_number from goods where id="'.$id.'"';

	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');

	$result=$conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>