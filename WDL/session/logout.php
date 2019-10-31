<?php
	
	session_start();

	echo "Session ended :) <br>"."You visited ".$_SESSION['counter']." times";

	session_unset();
	session_destroy();

?>