function triggerEnter() {
	if (event.keyCode==13) {
		document.getElementById("submit").click();
	}
}

function calculate() {
	var userIn = document.getElementById("base10").value;

	if(isNaN(userIn))
		document.getElementById("output").innerHTML = "Input is not a number";
	else {
		var base10 = parseInt(userIn);
		var result = "";
		var bit = 0;
		var quotient = 0;
		console.log(base10);


		while (base10 > 0){
			bit = base10 % 2;
			quotient = Math.floor(base10/2);
			result = bit + result;
			base10 = quotient;
		}

		document.getElementById("output").innerHTML = result;
	}
}
