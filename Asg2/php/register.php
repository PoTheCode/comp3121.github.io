<html><title>Registration status</title>
<body>

<p>
<?php
$filer=fopen("acc.txt","r") or exit("Unable to open file!");

$exist = 0;
while(!feof($filer))
{
	$tmpString = fgets($filer);
	$tmpArr = explode(';', $tmpString);
	$loginName = "";
	if ($tmpArr[0]==$_POST["userName"]){
		$exist = 1;
		
		break;
	};
  	
}
fclose($filer);

if($exist==0){
	$file=fopen("acc.txt","a+") or exit("Unable to open file!");
	$stringData = $_POST["userName"];
	fwrite($file, $stringData);
	fwrite($file, ";");
	$stringData = $_POST["userPassword"];
	fwrite($file, $stringData);
	fwrite($file, ";");
	$stringData = $_POST["userEmail"];
	fwrite($file, $stringData);
	fwrite($file, ";\n");
	fclose($file);

	echo "Register Success";
	print "<p><a href='http://localhost/asg2/loginForm.html'>Hone Page</a></p>";
} else{
	echo "The username is exist!";
	print "<p><a href='http://localhost/asg2/registerForm.html'>Please Register Agian</p>";
}

?>
  
</p>

</body>
</html>