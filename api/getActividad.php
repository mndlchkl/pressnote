<?php

$idActividad = $_GET["id"] === false ?null:$_GET["id"];


$sqlset ="SET lc_time_names = 'es_ES'" ;


$sql = "select *, 
	concat('El ',DATE_FORMAT(timestart, '%W %d de %M a las %h:%i %p') ) as fechah from events  where id = $idActividad "; 

include('connpdo.php');


    try{
        $db = new db();
        $db = $db->connect();
          $stmt2 = $db->query($sqlset);
 

        $stmt = $db->query($sql);
        $actividad = $stmt->fetch();
        $db=null;
        
        echo  json_encode($actividad) ;//$callback;
     //   echo  json_encode( $actividades);

    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';

    }


    ?>