<?php

$servername = "localhost";
$username = "root";
$password = "godzuki";
$dbname = "ecpm";

 
 include('conn.php');

$q = "select * from notes  order by created desc"; 
       //ESTE ARRAY ALMACENARA LOS REGISTROS

$datos = array();
        //REALIZA CONSULTA
        if($result = $mysqli->query($q)){    
            //ITERAMOS TODOS LOS REGISTROS DEVUELTOS Y LLENAMOS EL ARRAY
            while($row = $result->fetch_array(MYSQLI_ASSOC)){
                $datos[] = $row;             
            } 
           echo  json_encode($datos);           
        }
        $result->close();
        $mysqli->close();
?>