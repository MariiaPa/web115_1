function welcome() {
	var welcomeMessage = document.getElementById("greeting");
	var fname = document.getElementById("fname");
	var minitial = document.getElementById("minitial");
	var lname = document.getElementById("lname");
	welcomeMessage.innerHTML = "Welcome to MariiaTravels, " + fname.value + " " + minitial.value + " " + lname.value + "!";
}


function loop() {
	var number = prompt("How high do you want to count, " + fname.value + "?");
	var text = "";
	 for(i = 1; i <= number; i++) {
		if (i % 2 === 0) {
			text += i + "  Go outside! - the number is even!" + "<br />";
			
		}
		else {
			text += i + "  Go outside! - the number is odd!" + "<br />";
			}
			
	}
	
		document.getElementById("list").innerHTML = text;
}
