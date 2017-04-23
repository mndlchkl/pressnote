<?php 
$servername = "localhost";
$username = "root";
$password = "godzuki";
$dbname = "ecpm";
 
$mysqli = new mysqli($servername,$username,$password,$dbname);
// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_set_charset($mysqli,"utf8");



 ?>