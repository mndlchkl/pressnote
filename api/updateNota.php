 <?php
$id= isset($_POST['id']) ? $_POST['id']:NULL  ;
$header= isset($_POST['header']) ? $_POST['header']:NULL  ;
$subheader= isset($_POST['subheader'])?$_POST['subheader']:NULL;
$body= isset($_POST['body'])  ? $_POST['body']:NULL;

$url=   isset($_POST['url']) ?$_POST['url']:NULL;
$author=   isset($_POST['author']) ?$_POST['author']:NULL;

 

include('conn.php');
 
	$stmt = $mysqli->prepare("UPDATE notes set header=?, subheader=?, body=?, url=?, author=? WHERE id=?");
	$stmt->bind_param("ssssss", $header	, $subheader, $body, $url,$author,$id);
	$stmt->execute();
 
	if (! ($stmt->error == '') ) {
	 	echo "Error al actualizar en la bd: ". $stmt->error;
	}else
	{
		echo 1; // "Archivo guardado en el servidor, Nota actualizada correctamente." ;   	
	}
	$stmt->close();
	$mysqli->close();

 
?>



