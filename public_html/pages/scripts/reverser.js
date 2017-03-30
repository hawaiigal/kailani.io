function triggerEnter() {
	if (event.keyCode === 13) {
		document.getElementById("submit").click();
	}
}

function reverse() {
    "use strict";
    var input = document.getElementById("userInput").value;
    console.log(input);
    var temp = "";

    for (var i = input.length - 1; i > -1; i -= 1) {
        temp += input.charAt(i);
    }

    if (document.getElementById("replaceChar").checked) {
      temp = replaceChar(temp);
    }

    document.getElementById("output").innerHTML = temp;
}

function replaceChar(original) {
    var mapping = { "a": "ɐ",
                    "b": "q",
                    "c": "ɔ",
                    "d": "p",
                    "e": "ǝ",
                    "f": "ɟ",
                    "g": "ƃ",
                    "h": "ɥ",
                    "i": "ᴉ",
                    "j": "ɾ",
                    "k": "ʞ",
                    "l": "l",
                    "m": "ɯ",
                    "n": "u",
                    "o": "o",
                    "p": "d",
                    "q": "b",
                    "r": "ɹ",
                    "s": "s",
                    "t": "ʇ",
                    "u": "n",
                    "v": "ʌ",
                    "w": "ʍ",
                    "x": "x",
                    "y": "ʎ",
                    "z": "z",
                    " ": " "};

    var reverseTemp = "";
    for (var i = 0; i < original.length; i += 1) {
      reverseTemp += mapping[original.charAt(i)];
    }

    return reverseTemp;
}
