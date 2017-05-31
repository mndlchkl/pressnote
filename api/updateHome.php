 <?php
$t1= isset($_POST['titulo1'])? $_POST['titulo1']:NULL;
$t2=   isset($_POST['titulo2']) ?$_POST['titulo2']:NULL; 
$p1= isset($_POST['ini1']) ? $_POST['ini1']:NULL  ;
$p2= isset($_POST['ini2'])?$_POST['ini2']:NULL;
$url1= isset($_POST['url1'])? $_POST['url1']:NULL;
$url2=   isset($_POST['url2']) ?$_POST['url2']:NULL; 
// /test/pressnote/img/notes/Convocatoria.jpg
$uploads_dir = 'C:\xampp\htdocs\pressnote\img\rec';
 
	include('conn.php');
	
	$stmt = $mysqli->prepare("UPDATE home set parrafo1=?, parrafo2=?, url1=? , url2=?,titulo1=?,titulo2=? where idHome=1");
	$stmt->bind_param("ssssss", $p1, $p2, $url1, $url2,$t1,$t2);
	$stmt->execute();

	if (! ($stmt->error == '') ) {
	 	echo "Error al guardar en la bd: ". $stmt->error;
	}else
	{
		echo  1;   	
	}

	$stmt->close();
	$mysqli->close();

 
 
?>


