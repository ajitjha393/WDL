let containerBox = document.querySelector(".container");
let attemptRemaining = 5;
let enteredCode = "";
let flag = 0;

const randomCode = randomDigitCodeGenerator();
const hintBox = document.querySelector("#hint-code");
const inputBox = document.querySelector("#input-code");
const attemptBox = document.querySelector("#attempt");

document.querySelector(".btn").addEventListener('click',function(){

	if(inputBox.value.length === 4 && attemptRemaining !== 0){


		enteredCode = inputBox.value;
		let sysCode = getSysCode();
		hintBox.textContent = `Sys Code : ${sysCode}`;
		attemptBox.textContent = `Remain Attempt : ${--attemptRemaining}`;
		if(sysCode === "OOOO"){

			alert("CONGRATS U WON !!!");
		}



	}else{
		alert("Code must be of length 4 :(  ");
	}



});






// // FUNCTIONS SECTION




function randomDigitCodeGenerator(){

	randomDigitsArray = [0,1,2,3,4,5];
	takenDigit = [0,0,0,0,0,0];

	let randomDigit = "";
	while(randomDigit.length !== 4){
		let index = `${Math.floor(Math.random()*1000) % 6}`;
		if(!takenDigit[index]){
			takenDigit[index] = 1;
		
		randomDigit += index;
		}

	}

	return randomDigit;

}

function getSysCode(){
	
	let sysCode = "";
	for(let i = 0 ; i < 4 ; i++){
		flag = 0;
		for(let j = 0 ; j < 4 ; j++){
			if(enteredCode[i] === randomCode[i]){
				flag = 1;
				sysCode += 'O';
				break;
			}
			else if(enteredCode[i] === randomCode[j] && i !== j){
				flag = 1;
				sysCode += 'V';
				break;
			}
		
		}
			if(flag === 0){
					sysCode += 'X';		
				}
	}

	return sysCode;
}