<?php
include_once('weather.php');
//connecting to database
$con=mysqli_connect('localhost','root','@#Jainepal123','shishir_db');

//selecting from database
$result=mysqli_query($con,"SELECT * FROM g5_weathercondition ORDER BY created_at DESC LIMIT 1");
$row=mysqli_fetch_assoc($result);
    echo json_encode($row, true);
?>