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
		if ((checkDivision(i, firstDivisor)) && (checkDivision(i, secondDivisor)) && (checkDivision(i, thirdDivisor))) {
			text += i + ".  Go outside! - Hike and Bike and Swim!" + "<br />";	
			}	else if (checkDivision(i, secondDivisor)) {
			text += i + ".  Go outside! - Bike" + "<br />";
			}	else if (checkDivision(i, firstDivisor)) {
			text += i + ".  Go outside! - Hike!" + "<br />";
		} else if (checkDivision(i, thirdDivisor)) {
			text += i + ".  Go outside! - Swim!" + "<br />";
		} else if ((checkDivision(i, firstDivisor)) && (checkDivision(i, secondDivisor))) {
			text += i + ".  Go outside! - Hike and Bike!" + "<br />";
		} else if ((checkDivision(i, firstDivisor)) && (checkDivision(i, thirdDivisor))) {
			text += i + ".  Go outside! - Hike and Swim!" + "<br />";
		} else if ((checkDivision(i, secondDivisor)) && (checkDivision(i, thirdDivisor))) {
			text += i + ".  Go outside! - Bike and Swim!" + "<br />";
		}
		else {
			text += i + ".  Go outside!" + "<br />";
		}
	}
		document.getElementById("list").innerHTML = text;
}

