<?php
$desc= isset($_POST['desc']) ? $_POST['desc']:NULL;
$imagen = isset( $_FILES['pic']) ?  $_FILES['pic']:NULL;
$uploads_dir = 'C:\xampp\htdocs\pressnote\img\rec';
//$uploads_dir =  '/var/www/html/test/pressnote/img/rec';
$tmp_name = $_FILES['pic']['tmp_name'];
$unwanted_array = array('Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E', 'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );

$name = strtr( str_replace(' ','',$desc), $unwanted_array ).time(); 

$newdir = "$uploads_dir/$name.jpg";
if ( move_uploaded_file($tmp_name, $newdir ) ){
	include('conn.php');
	$urlimg ="http://localhost/pressnote/img/rec/$name.jpg";
	//$urlimg ="http://localhost/pressnote/img/rec/$name.jpg";
	$stmt = $mysqli->prepare("INSERT INTO resources(url, descripcion,nameFile ) 
						 VALUES (?, ?,?)");
	$stmt->bind_param("sss", $urlimg, $desc, $name );
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


