<?php
	include 'connect.php';

	$username=$_POST['username'];
	// $password=isset($_POST['password']);


	$sql='select * from user where username="'.$username.'"';

	//查询前设置编码，放置输出乱码
	$result = $conn->query('set names utf8');

	$result=$conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);

	// if($row[0]['password']==$password){
	// 	echo 'yes';
	// }else{
	// 	echo 'no';
	// }

	echo json_encode($row,JSON_UNESCAPED_UNICODE);

	// if($row){

	// }
	
	// if($isSuccess!=''){
	// 	echo 'yes';
	// }else{
	// 	echo 'no';
	// }
?>