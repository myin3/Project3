<?php 
session_start(); /* Starts the session */
unset($_SESSION['auth']);
session_destroy(); /* Destroy started session */
header("location:login.php");
?>
