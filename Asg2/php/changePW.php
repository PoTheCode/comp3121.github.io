<!DOCTYPE html>
<html>
<head>
	<title>Change Password</title>
</head>
<body>
<p>
	<?php
		$currentFile = 'acc.txt';
		$newFile = 'newacc.txt';

		$cFile=fopen($currentFile, "r") or exit("Unable to open file!");

		$nFile=fopen($newFile,"w+") or exit("Unable to open file!");

		$correct = 0;
		while(!feof($cFile))
		{
			$tmpString = fgets($cFile);
			$tmpArr = explode(';', $tmpString);
			if ($tmpArr[0]==$_POST["userName"] && $tmpArr[1]==$_POST["userPassword"]){
				$correct = 1;
				$stringData = $_POST["userName"];
				fwrite($nFile, $stringData);
				fwrite($nFile, ";");
				$stringData = $_POST["newPassword"];
				fwrite($nFile, $stringData);
				fwrite($nFile, ";");
				$stringData = $tmpArr[2];
				fwrite($nFile, $stringData);
				fwrite($nFile, ";\n");
				echo "<h1>Change Password Success</h1>";
				print "<p><a href='http://localhost/asg2/loginForm.html'>Home Page</a></p>";
			} else{
				fwrite($nFile, $tmpString);
			}
			
		}
		fclose($cFile);
		fclose($nFile);

		unlink($currentFile);
		rename($newFile, $currentFile);
		if($correct==0){
			echo "Username/Password invaild";
			print "<p><a href='http://localhost/asg2/ChangePWForm.html'>Try Agian</a></p>";

		}

	?>
</p>
</body>
</html>