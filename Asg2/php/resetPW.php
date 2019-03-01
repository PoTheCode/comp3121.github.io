<!DOCTYPE html>
<html>
<head>
	<title>Reset Password</title>
</head>
<body>
<p>
	Reset Password
</p>
<p>
	<?php
		function sendmail($name,$email){
			$toMsg = $email;
			$subMag = "Reset Password";
			$Msg = "Hi ".$name.",<br>    Your Password is reset to 123.";
			mail($toMsg, $subMag, $Msg);
		} 
		$currentFile = 'acc.txt';
		$newFile = 'newacc.txt';

		$cFile=fopen($currentFile, "r") or exit("Unable to open file!");

		$nFile=fopen($newFile,"w+") or exit("Unable to open file!");

		$correct = 0;
		while(!feof($cFile))
		{
			$tmpString = fgets($cFile);
			$tmpArr = explode(';', $tmpString);
			if ($tmpArr[0]==$_POST["userName"] && $tmpArr[2]==$_POST["userEmail"]){
				$correct = 1;
				$stringData = $_POST["userName"];
				fwrite($nFile, $stringData);
				fwrite($nFile, ";");
				$stringData = 123;
				fwrite($nFile, $stringData);
				fwrite($nFile, ";");
				$stringData = $_POST["userEmail"];
				fwrite($nFile, $stringData);
				fwrite($nFile, ";\n");
				echo "<h1>Reset Password Success</h1>";
				print "<p><a href='http://localhost/asg2/loginForm.html'>Home Page</a></p>";
				sendmail($tmpArr[0],$tmpArr[2]);
			} else{
				fwrite($nFile, $tmpString);
			}
			
		}
		fclose($cFile);
		fclose($nFile);

		unlink($currentFile);
		rename($newFile, $currentFile);
		if($correct==0){
			echo "Username/Email invaild";
			print "<p><a href='http://localhost/asg2/resetPWForm.html'>Try Agian</p>";

		}

	?>
</p>
</body>
</html>