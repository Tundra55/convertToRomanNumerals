var convertToRomanNumerals = require('./convertToRomanNumerals.js');
var outputMsg = require('./outputMsg.js');

function convertInput(input) {
	var msgToDisplay = outputMsg.processOutputMsg(input)
	var convertedInput = convertToRomanNumerals.processConversion(input);
	
	document.getElementById("outputMsg").innerHTML = msgToDisplay;
	document.getElementById("convertedVal").innerHTML = convertedInput ;
}