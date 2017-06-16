<?php
$ndata = json_decode( $_POST['ndata'],TRUE);

 
$idnota = $ndata['notaId'];
 
    	include('conn.php');

		$stmt1 = $mysqli->prepare("UPDATE notes set featured=0") ;
		$stmt1->execute();

		$stmt = $mysqli->prepare("UPDATE notes set featured=1 where id=?") ;
		$stmt->bind_param("i",$idnota);
		$stmt->execute();

		 if (! ($stmt->error == '') ) {
	 	echo "Error al actualizar en la bd: ". $stmt->error;
		}else
		{
			echo "Nota actualizada correctamente." ;   	
		}
		$stmt->close();
		$stmt1->close();
		$mysqli->close();
  
?>

