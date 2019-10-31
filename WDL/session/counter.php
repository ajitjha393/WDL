<?php 
	session_start();
	if(!isset($_SESSION['counter']))
		$_SESSION['counter'] = 0;
	else
		$_SESSION['counter'] += 1;

	echo $_SESSION['counter'];


?>
<!DOCTYPE html>
<html>
<head>
	<title>Session count</title>
</head>
<body>
	
	<a href="logout.php">LOGOUT</a>
	<script type="text/javascript">

	</script>

</body>

</html>



