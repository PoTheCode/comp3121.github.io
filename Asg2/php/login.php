<html>
<head>
	<title>Login Success</title>
</head>

<body>
<script  src="js/resetPW.js"></script>

<p>
<?php

function failMsg(){
	print "<p>Login Fail!</p>";
	print "<p>Go back to <a href='http://localhost/asg2/loginForm.html'>Home Page</a> or Go to <a href='http://localhost/asg2/registerForm.html'>Register</a></p>";
}
function successMsg($name,$admin){
	echo "<h1>Welcome $name! (The Administrator)</h1>";
	print "<p><a href='http://localhost/asg2/home.html'>Start Game (Default)</a></p>";
	print "<p><a href='http://localhost/asg2/gameSetting.html'>Start Game (Setting)</a></p>";
	print "<p><a href='http://localhost/asg2/ChangePWForm.html'>Change Password</a></p>";
	if($admin == 1){
		print "<p><a href=''>Reset Highest Score (Admin Option)</a></p>";
	}

}
$file=fopen("acc.txt","r") or exit("Unable to open file!");

$Success = 0;
$openAdmin = 0;
while(!feof($file))
{
	$tmpString = fgets($file);
	$tmpArr = explode(';', $tmpString);
	$loginName = "";
	if ($tmpArr[0]==$_POST["userName"] && $tmpArr[1]==$_POST["userPassword"]){
		$Success = 1;
		$loginName = $tmpArr[0];
		if($tmpArr[0]=="peter"){
			$openAdmin = 1;
		}
		break;
	};
  	
}

if ($Success==0){
	failMsg();
}

if($Success==1){
	successMsg($loginName,$openAdmin);
}
fclose($file);
?>
 
</p>

</body>
</html>