<?php
$updown = json_decode( $_POST['updown'],TRUE);

$status = $updown['status'];
$idnota = $updown['notaId'];
 
    	include('conn.php');

		$stmt = $mysqli->prepare("UPDATE notes set up=? where id=?") ;
		$stmt->bind_param("ii", $status,$idnota);
		$stmt->execute();

		 if (! ($stmt->error == '') ) {
	 	echo "Error al actualizar en la bd: ". $stmt->error;
		}else
		{
			echo "Nota actualizada correctamente." ;   	
		}
		$stmt->close();
		$mysqli->close();
  
?>


