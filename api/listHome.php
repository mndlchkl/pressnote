 <?php

 include('conn.php');

$q = "select * from home where idHome = 1"; 
       //ESTE ARRAY ALMACENARA LOS REGISTROS

$datos = array();
        //REALIZA CONSULTA
        if($result = $mysqli->query($q)){    
            //ITERAMOS TODOS LOS REGISTROS DEVUELTOS Y LLENAMOS EL ARRAY
           $row = $result->fetch_array(MYSQLI_ASSOC);
                
           echo  json_encode($row);           
        }
        $result->close();
        $mysqli->close();
?>