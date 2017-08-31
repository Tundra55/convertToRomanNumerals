module.exports = {

	processConversion : function(input) {
		i = input;
		var retVal = "";
		
		while (i >= 1000) {
			retVal += "M";
			i = i - 1000;
		}
		while (i >= 500) {
			retVal += "D";
			i = i - 500;
		}
		while (i >= 100) {
			retVal += "C";
			i = i - 100;
		}
		while (i >= 50) {
			retVal += "L";
			i = i - 50;
		}
		while (i >=10) {
			retVal += "X";
			i = i - 10;
		}
		while (i >= 5) {
			retVal += "V";
			i = i - 5;
		}
		while (i >= 1) {
			retVal += "I";
			i = i - 1;
		}
		
		retVal = retVal.replace("DCCCC", "CM");
		retVal = retVal.replace("CCCC", "CD");
		retVal = retVal.replace("LXXXX", "XC");
		retVal = retVal.replace("XXXX", "XL");
		retVal = retVal.replace("VIIII", "IX");
		retVal = retVal.replace("IIII", "IV");
		
		return retVal;
	}
}