<?php
 
$name= isset($_POST['name']) ? $_POST['name']:NULL  ;
$place= isset($_POST['place'])?$_POST['place']:NULL;
$descr= isset($_POST['descr'])? $_POST['descr']:NULL;
$imgurl=   isset($_POST['imgurl']) ?$_POST['imgurl']:NULL;
$responsable=   isset($_POST['responsable']) ?$_POST['responsable']:NULL;
$datestart= isset($_POST['datetimestart']) ? $_POST['datetimestart']:NULL  ;
$timestart = isset($_POST['timetimestart']) ? $_POST['timetimestart']:NULL  ;
$dateend= isset($_POST['datetimeend']) ? $_POST['datetimeend']:NULL  ;
$timeend= isset($_POST['timetimeend']) ? $_POST['timetimeend']:NULL  ;


$start= $datestart.' '.$timestart;
$end = $dateend.' '.$timeend;
include('connpdo.php');
$sql =  "insert into events(name, timestart, timeend,place, descr, imgurl, responsable) 
	 			VALUES('$name', '$start', '$end', '$place', '$descr', '$imgurl', '$responsable')";
    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
     
        $db=null;
        
       echo "Actividad creada correctamente." ;  //$callback;
     //   echo  json_encode( $actividades);

    }catch(PDOException $e){
        echo  '{"Error al guardar en la bd:":{"text":'.$e->getMessage().'}';

    }
 
/*
	$stmt = $mysqli->prepare("INSERT INTO events(name, FROM_UNIXTIME(timestart),FROM_UNIXTIME(timeend), place, descr, imgurl,responsable) VALUES ( ?,?,?, ?,?,?,?)");
	$stmt->bind_param("siissss", $name, $timestart, $timeend,	  $place, $descr, $imgurl, $responsable);
	$stmt->execute();

	if (! ($stmt->error == '') ) {
	 	echo "Error al guardar en la bd: ". $stmt->error;
	}else
	{
		echo "Actividad creada correctamente." ;   	
	}
	$stmt->close();
	$mysqli->close();


  */
 

 
 
 
?>


