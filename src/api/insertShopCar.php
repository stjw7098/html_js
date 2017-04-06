<?php
	include 'connect.php';

	$id=$_GET['id'];
	$user=$_GET['user'];


	$sql = "insert into shopcar(user,goods_number) values('".$user."','".$id."');";

	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');

	$result=$conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo $sql;

	
?>