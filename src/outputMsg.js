module.exports = {
	processOutputMsg : function(num) {
		var retVal;
		if (num > 0 && num <= 4000) {
			retVal = num + " converted to Roman Numerals:";
		}
		else {
			retVal = "Please enter a number 1 - 4000";
		}
			
		return retVal;
	},
}