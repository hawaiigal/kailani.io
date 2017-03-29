function triggerEnter() {
    "use strict";
	if (event.keyCode === 13) {
		document.getElementById("submit").click();
	}
}

function reverse() {
    "use strict";
    var input = document.getElementById("userInput").value;
    console.log(input);
    var temp = "";

    for (var i = input.length - 1; i >= -1; i -= 1) {
        temp += input.charAt(i);
    }
    
    if (document.getElementById("replaceChar").checked) {
        
    }
    
    document.getElementById("output").innerHTML = temp;
}

function replaceChar() {
    var mapping = { "e": "ɘ", } 
    
    
}