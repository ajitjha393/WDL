<?php

session_start();

if(isset($_POST['submit'])){

	$conn = mysqli_connect('localhost','root','','testdb') or die("datbase connection failed");





	unset($_SESSION['submit']);
	session_destroy();
}





?>