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
	var firstDivisor = document.getElementById("firstnum").value;
	var secondDivisor = document.getElementById("secondnum").value;
	var thirdDivisor = document.getElementById("thirdnum").value;
	var firstWord = document.getElementById("firstword").value;
	var secondWord = document.getElementById("secondword").value;
	var thirdWord = document.getElementById("thirdword").value;
	var totalCount = document.getElementById("totalcount").value;
	var defaultWord = document.getElementById("default").value;

	for (var i = 1; i <= totalCount; i++) {
		if ((checkDivision(i, firstDivisor)) && (checkDivision(i, secondDivisor)) && (checkDivision(i, thirdDivisor))) {
			text += i + ". " + firstWord + " " + secondWord + " " + thirdWord + "<br />";	
			}	else if (checkDivision(i, secondDivisor)) {
			text += i + ". " + secondWord + "<br />";
			}	else if (checkDivision(i, firstDivisor)) {
			text += i + ". " + firstWord + "<br />";
			} else if (checkDivision(i, thirdDivisor)) {
			text += i + ". " + thirdWord + "<br />";
			} else if ((checkDivision(i, firstDivisor)) && (checkDivision(i, secondDivisor))) {
			text += i + ". " + firstWord + secondWord + "<br />";
			} else if ((checkDivision(i, firstDivisor)) && (checkDivision(i, thirdDivisor))) {
			text += i + ". " + firstWord + thirdWord + "<br />";
		} else if ((checkDivision(i, secondDivisor)) && (checkDivision(i, thirdDivisor))) {
			text += i + ". " + secondWord + thirdWord + "<br />";
		}
		else {
			text += i + ". " + defaultWord + "<br />";
		}
	}
		document.getElementById("list").innerHTML = text;
}

