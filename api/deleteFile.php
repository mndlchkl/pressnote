<?php
$rec = json_decode( $_POST['rec'],TRUE);
$id= isset($rec['idresources']) ? $rec['idresources']:NULL  ;
$name= isset($rec['nameFile']) ? $rec['nameFile']:NULL  ;
$dir='C:\xampp\htdocs\pressnote\img\rec';

$name='/'.$name.'.jpg';
$file = $dir.$name ;
if (!unlink($file))
  {
  echo "No se pudo eliminar el archivo. (Comprueb e con la url si aún existe)";//("Error deleting $file");
  }
else
  {
   include('conn.php');
  	$stmt = $mysqli->prepare("delete from resources where idresources = ?");
	$stmt->bind_param("s", $id );
	$stmt->execute();
	if (! ($stmt->error == '') ) {
	 	echo "Error al eliminar en la bd: ". $stmt->error;
	}else
	{
		echo 1;   	
	}
	$stmt->close();
	$mysqli->close();
  }
 
?>
 
 