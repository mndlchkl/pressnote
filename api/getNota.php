<?php

$idnota = $_GET["id"] === false ?null:$_GET["id"];

$q = "select * from notes where id = $idnota "; 
    include('conn.php');

//ESTE ARRAY ALMACENARA LOS REGISTROS
$datos = array();

        //REALIZA CONSULTA
        if($result = $mysqli->query($q)){    
            //ITERA TODOS LOS REGISTROS DEVUELTOS Y LLENAMOS EL ARRAY
           $row = $result->fetch_array(MYSQLI_ASSOC);
                
           echo  json_encode($row);           
        }
        $result->close();
        $mysqli->close();
?>