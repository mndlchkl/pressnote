<?php
$header= isset($_POST['header']) ? $_POST['header']:NULL  ;
$subheader= isset($_POST['subheader'])?$_POST['subheader']:NULL;
$body= isset($_POST['body'])? $_POST['body']:NULL;
$link=   isset($_POST['link']) ?$_POST['link']:NULL;
$author=   isset($_POST['author']) ?$_POST['author']:NULL;

	include('conn.php');
	//$body= nl2br($body);


	$stmt = $mysqli->prepare("INSERT INTO notes(header, subheader, body, url,author) 
						 VALUES (?, ?, ?,?,?)");

	$stmt->bind_param("sssss", $header	, $subheader, $body, $link, $author);
	$stmt->execute();

	if (! ($stmt->error == '') ) {
	 	echo "Error al guardar en la bd: ". $stmt->error;
	}else
	{
		echo "Nota creada correctamente." ;   	
	}
	$stmt->close();
	$mysqli->close();


  
 

 
 
 
?>


