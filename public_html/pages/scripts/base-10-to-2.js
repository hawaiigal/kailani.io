function triggerEnter() {
	if (event.keyCode==13) {
		document.getElementById("submit").click();
	}
}

function calculate() {
	var userIn = document.getElementById("base10").value;

	console.log(userIn);

	if(isNaN(userIn))
		document.getElementById("output").innerHTML = "Input is not a number";
	else {
		var base10 = parseInt(userIn);
		var result = "";
		console.log(base10);

		while (base10 > 0){
			if(base10%2==1){
				result+="0";
				base10 = (base10 - 1)/ 2;

				console.log(result);
			}
			else{
				result+="1";
				base10 = base10 / 2;

				console.log(result);
			}
		}

		document.getElementById("output").innerHTML = result;
	}
}
