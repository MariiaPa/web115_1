
function fill() {
	var text = "";
	var fName= document.getElementById("fname").value;
	var lName = document.getElementById("lname").value;
	document.getElementById("logoname").innerHTML = fName.value + lName.value;
	/*var thirdDivisor = document.getElementById("thirdnum").value;
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
		document.getElementById("logoname").innerHTML = text;*/
}

