<?php

$con = mysqli_connect("localhost", "asktec6", "Tokeyjupiter0", "asktec6_leaderboard") or die();




$name = mysqli_real_escape_string($con, $_POST['person']);
$score = mysqli_real_escape_string($con, $_POST['score']);

   $sql="INSERT INTO leaderboard (Name, Score)
VALUES ('$name', '$score')";

if (!mysqli_query($con,$sql)) {
  die('Error: ' . mysqli_error($con));
}



$sqll = "SELECT * FROM leaderboard ORDER BY score DESC LIMIT 10";
$result=mysqli_query($con, $sqll);


 echo "<table>";
 while($row = mysqli_fetch_array($result))
          {
          echo "<tr><td>" . $row['Name'] . "</td><td> " . $row['Score'] . "</td></tr>"; //these are the fields that you have stored in your database table employee
          }
 echo "</table>";





?>
















<!DOCTYPE html>







<head>
    <title> Game </title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
</head>

<body>

  
   
    
   <button style = "text-align:center;" onclick="start()">Click Me to start game!  </button>
   
   <script>
   function start(){
   name();     
   reset();
main();
countdown();
   }
   
    </script>
   

  
<div id="counter"></div>
    <script>
      
         function name() {
            var txt;
            var person = prompt("Please enter your name:", "");
            window.person = person;
            if (person == null || person == "") {
                txt = "Hello guest!  You have 60 seconds to collect as much as you can!";
            } else {
                txt = "Hello " + person + "! You have 60 seconds to collect as much as you can!";
            }
            document.getElementById("intro").innerHTML = txt;
            document.getElementById("persons").value = person;
        }  
  
    </script>

    <script src="game.js">
    </script>
  <div id="intro" style="text-align:center; font-size: 32px;"></div>
<form method="post" action="<?php echo $PHP_SELF;?>">

<div id="hidden">SEE LEADERBOARD

<input type="text" id="persons" style="display:none;" name="person"/>

<input type="text" id="scores" style="display:none;" name="score" />
</div>
  <input id="submit" type="submit" value="Submit" name="Submit"/>
</form>


</body>

</html>