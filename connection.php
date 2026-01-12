<?php      
    $host = "localhost";  
    $username = "kha22196841";  
    $password = '50kzvNXmlDixrz8';  
    $db_name = "kha22196841";  
      
    $con = mysqli_connect($host, $username, $password, $db_name);  
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }  
?>  