  <?php

$desc= isset($_POST['desc']) ? $_POST['desc']:NULL  ;


$imagen = isset( $_FILES['pic']) ?  $_FILES['pic']:NULL;
// /test/pressnote/img/notes/Convocatoria.jpg
$uploads_dir = 'C:\xampp\htdocs\pressnote\img\rec';
//$uploads_dir =  '/var/www/html/test/pressnote/img/notes';
 $tmp_name = $_FILES['pic']['tmp_name'];
$name = time();
$newdir = "$uploads_dir/$name.jpg";

if ( move_uploaded_file($tmp_name, $newdir ) ){
	include('conn.php');

	$urlimg ="http://ecpm.cl/test/pressnote/img/rec/$name.jpg";

	$stmt = $mysqli->prepare("INSERT INTO resources(url, descripcion ) 
						 VALUES (?, ?)");

	$stmt->bind_param("ss", $urlimg, $desc );
	$stmt->execute();

	if (! ($stmt->error == '') ) {
	 	echo "Error al guardar en la bd: ". $stmt->error;
	}else
	{
		echo 1 ;   	
	}
	$stmt->close();
	$mysqli->close();

}else{
	echo "No se pudo guardar el achivo, ni cear la nota";
}

  
 

 
 
 
?>


