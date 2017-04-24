 <?php

$login = json_decode($_POST['login'],true);
$usr = $login['username'];
$pass = $login['pass'];
   
include('conn.php');
 
 
if ($stmt = $mysqli->prepare("SELECT  pw FROM user WHERE username=?")) {
    $stmt->bind_param("s", $usr);
    $stmt->execute();
    $stmt->bind_result($dbpass);
	$stmt->fetch();
	$stmt->close();
    $mysqli->close();

	if ($dbpass == sha1($pass) ) {
		echo 1;//echo 'Correct';
		}else
		{
			echo 0;//echo "Incorrect. dbpass:".$dbpass.' - sha1passnow: '.sha1($pass).' - user:'.$usr.' - pass: '.$pass;
		}
   

}



 
 
 
?>

