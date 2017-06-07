<?php

$idnota = $_GET["id"] === false ?null:$_GET["id"];

$q = "select * from notes where id = $idnota "; 
    include('conn.php');

//ESTE ARRAY ALMACENARA LOS REGISTROS
$datos = array();

        //REALIZA CONSULTA
        if($result = $mysqli->query($q)){    
        
           $row = $result->fetch_array(MYSQLI_ASSOC);
                
           echo  json_encode($row);           
        }
        $result->close();
        $mysqli->close();
?>