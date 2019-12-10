function welcome() {
	var welcomeMessage = document.getElementById("greeting");
	var fname = document.getElementById("fname");
	var minitial = document.getElementById("minitial");
	var lname = document.getElementById("lname");
	welcomeMessage.innerHTML = "Welcome to MariiaTravels, " + fname.value + " " + minitial.value + " " + lname.value + "!";
}


function checkDivision(firstNumber, secondNumber) {
	var divisible = false;
	if (firstNumber % secondNumber === 0) {
		divisible = true;
	}
	return divisible;
}

function loop() {
	var text = "";
	var firstDivisor = 3;
	var secondDivisor = 5; 
	var thirdDivisor = 7;

	for (var i = 1; i <= 140; i++) {
		text += i + ". ";
		
		if (checkDivision(i, firstDivisor)) {
			text += "Hike";
		}
		if (checkDivision(i, secondDivisor)) {
			text += "Bike";
		}
		if (checkDivision(i, thirdDivisor)) {
			text += "Swim";
		}
		else {
			text += " n/a";
		}
		document.getElementById("list").innerHTML = text;
}

