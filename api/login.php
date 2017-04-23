 <?php

$login = json_decode($_POST['login'],true);
$username = $login['username'];
$pass = $login['pass'];
    
include('hashing.php');
 
//$myhash= generatePasswordHash($pass, null);


var_dump(hash_equals('$12$HlVN65cmKXCQuxO7ceSwO.hc66MTADdV92sLdWWEKydKkbQLjn5EK', '$12$HlVN65cmKXCQuxO7ceSwO.hc66MTADdV92sLdWWEKydKkbQLjn5EK'));



/*
 echo password_hash($pass, PASSWORD_DEFAULT, ['cost' => 10]) .'<br>'.
 		password_hash($pass, PASSWORD_DEFAULT, ['cost' => 12]) .'<br>'.
 		password_hash($pass, PASSWORD_DEFAULT, ['cost' => 13]) .'<br>';
*/
 //echo $myhash;
//echo password_hash($login['pass'], PASSWORD_DEFAULT, [ 'cost' => 13]) ;



/*
$servername = "localhost";
$username = "root";
$password = "godzuki";
$dbname = "sgcc";
 
 
$mysqli = new mysqli($servername,$username,$password,$dbname);
// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_set_charset($mysqli,"utf8");

if ($stmt = $mysqli->prepare("SELECT concat(name,' ',last_name) FROM user WHERE rut=?")) {
    $stmt->bind_param("s", $rut);
    $stmt->execute();
    $stmt->bind_result($person);
	$stmt->fetch();
    $stmt->close();
}




$stmt = $mysqli->prepare("INSERT INTO notes(header, subheader, body, url, pic) 
						 VALUES (?, ?, ?,?,?)");

$stmt->bind_param("sssss", $header	, $subheader, $body, $link, $pic);
$stmt->execute();

if (! ($stmt->error == '') ) {
 	echo "Error: ". $stmt->error;
}else
{
	echo       "nota creada correctamente." ;   	
}
$stmt->close();
$mysqli->close();
 
 */
 
?>

