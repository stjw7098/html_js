<?php
	include 'connect.php';

	$username=$_POST['username'];
	$password=$_POST['password'];

	// 查询数据
	$sql = "insert into user(username,password) values('".$username."','".$password."');";

	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');

	// // 查询数据库获取数据
	$result = $conn->query($sql);

	
	echo $sql;

	//使用查询结果集
	// $row = $result->fetch_all(MYSQLI_ASSOC);


	// echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>