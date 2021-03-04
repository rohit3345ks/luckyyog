<?php
    $name="";
    $email="";
    $message="";
    if(isset($_POST["Name"]))
    {
        $name=$_POST["Name"];
    }
    if(isset($_POST["Email"]))
    {
        $email=$_POST["Email"];
    }
    if(isset($_POST["Message"]))
    {
        $message=$_POST["Message"];
    }
    //                  "ServerName","username","password"
    $con=mysqli_connect("localhost",   "root",     "") or die("Couldn't connect to database.");
   
    //            connection variable, "database name"
    $db=mysqli_select_db($con,                 "test") or die("Couldn't select the database.");
    $query="INSERT INTO `test` (`Name`,`Email`,`Message`) VALUES(?,?,?);";
    $sql=$con->prepare($query);
    $sql->bind_param("sss",$name,$email,$message);
    $sql->execute();
?>
