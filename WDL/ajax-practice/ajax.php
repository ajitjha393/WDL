<?php 

	$hints_array = [

		"Apple",
		"Amanda",
		"Ball",
		"Cat",
		"Dog",
		"Elephant",
		"Fish",
		"Garden",
		"Hello",
		"India",
		"Jha",
		"Kule",
		"Mango"


	];




	$q = $_REQUEST["q"];
	$hint = "";

	if($q !== ""){
		$q = strtolower($q);
		foreach ($hints_array as $name){
			if(stristr($q,substr($name , 0 , strlen($q)))){
				if($hint === ""){
					$hint = $name;
				}else{
					$hint .= ", $name";
				}
			}
		}
	}

echo ($hint === "")? "no suggestion" : $hint;


 ?>