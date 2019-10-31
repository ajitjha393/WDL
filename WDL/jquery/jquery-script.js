// function validateForm(){

// 	$(document).ready(function(){

// 		const fname = $("#fname").val();
// 		console.log(fname);
// 	});

// 	return false;


// }

document.getElementById("fname").addEventListener('mouseover',function(){
	document.getElementById("fname").classList.add("red-class");
}
);


document.getElementById("fname").addEventListener('mouseleave',function(){
	document.getElementById("fname").classList.remove("red-class");
}
);