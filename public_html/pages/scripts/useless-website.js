function output() {
	var x = document.getElementById("ayy");
	document.getElementById("myOutput").innerHTML = x.value;
}

function triggerEnter() {
	if (event.keyCode==13)
		document.getElementById("submit").click();
}