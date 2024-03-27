<?php

$data=file_get_contents('https://api.openweathermap.org/data/2.5/weather?q=Edinburgh&units=metric&appid=0ddcb5f3f9e4652ea044a6f5657f6dbf');
$data=json_decode($data, true);

//connecting to database
$con=mysqli_connect('localhost','root','@#Jainepal123','shishir_db');

//selecting database
if (!mysqli_select_db($con,'shishir_db')){
    mysqli_query($con, 'create database shishir_db');
    mysqli_select_db($con, 'shishir_db');
}

//creating a table
mysqli_query($con,'create table if not exists g5_weathercondition(created_at DATETIME,name varchar(250),
description varchar(255),
temp float,
pressure varchar(255),
humidity varchar(255),
deg varchar(100),
speed float)');


$city=$data["name"];
$description=$data['weather'][0]['description'];
$temp=$data['main']["temp"];
$pressure=$data['main']["pressure"];
$humidity=$data['main']["humidity"];
$deg=$data['wind']["deg"];
$speed=$data['wind']["speed"];
$created_at = date("Y-m-d H:i:s");
$icon= $data['weather'][0]['icon'];

mysqli_query($con, "insert into g5_weathercondition values ('$created_at','$city','$description','$temp','$pressure','$humidity','$deg','$speed')");


?>