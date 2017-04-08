<?php
	include 'connect.php';

	$type=$_GET['type'];
	$page=$_GET['page'];

	// $page=1;

	// $sql = 'select * from user order by age desc limit '. ($page-1)*2 .',2';

		$sql="select * from goods where type='".$type."' limit ". ($page-1)*4 .',4';

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