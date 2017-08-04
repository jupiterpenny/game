<?php

$con = mysqli_connect("localhost", "asktec6", "Tokeyjupiter0", "asktec6_leaderboard");

if(mysqli_connect_errno()){
    echo "Error occured while connecting with database ".myqli_connect_errno();
}

session_start();

 $name= mysqli_real_escape_string($con,$_POST['name']);
  $score= mysqli_real_escape_string($con,$_POST['score']);

$sql = "INSERT INTO leaderboard (name, score)
VALUES '$name', '$score')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>