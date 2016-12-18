function triggerEnter() {
	if (event.keyCode==13) {
		document.getElementById("submit").click();
	}
}

function calculate() {
	var base2 = document.getElementById("userInput").value;
	var power = 0;
	var result = 0;

	while (base2.length > 0) {
		if (base2.charAt(base2.length - 1) == 1) {
			result += Math.pow(2, power);
			base2 = base2.substring(0, base2.length - 1);
			power++;
		}
		else {
			base2 = base2.substring(0, base2.length - 1);
			power++;
		} 
	}
	document.getElementById("output").innerHTML = result;
}