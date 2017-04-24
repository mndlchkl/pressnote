 <?php

$header= isset($_POST['header']) ? $_POST['header']:NULL  ;
$subheader= isset($_POST['subheader'])?$_POST['subheader']:NULL;
$body= isset($_POST['body'])? $_POST['body']:NULL;
$link=   isset($_POST['link']) ?$_POST['link']:NULL;
$author=   isset($_POST['author']) ?$_POST['author']:NULL;
$imagen = isset( $_FILES['pic']) ?  $_FILES['pic']:NULL;

$uploads_dir = 'C:\xampp\htdocs\pressnote\img\notes';
$tmp_name = $_FILES['pic']['tmp_name'];
$unwanted_array = array(    'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
                            'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
                            'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
                            'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
                            'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );
$preimg= str_replace(' ','',basename($header));
$name = strtr( $preimg, $unwanted_array );
$newdir = "$uploads_dir/$name.jpg";
if ( move_uploaded_file($tmp_name, "$uploads_dir/$name.jpg") ){
	include('conn.php');
	$body= nl2br($body);
	$stmt = $mysqli->prepare("INSERT INTO notes(header, subheader, body, url, pic,author) 
						 VALUES (?, ?, ?,?,?,?)");

	$stmt->bind_param("ssssss", $header	, $subheader, $body, $link, $newdir,$author);
	$stmt->execute();

	if (! ($stmt->error == '') ) {
	 	echo "Error al guardar en la bd: ". $stmt->error;
	}else
	{
		echo "Archivo guardado en el servidor, Nota creada correctamente." ;   	
	}
	$stmt->close();
	$mysqli->close();

}else{
	echo "No se pudo guardar el achivo, ni cear la nota";
}

  
 

 
 
 
?>


