var convertToRomanNumerals = require('../src/convertToRomanNumerals.js');

// describe(MANY COMPLEX PARAMETERS);
// describe("MY DESCRIPTION", MY_FUNCTION(MANY COMPLEX PARAMETERS);
describe(
//	My Description	
	"test convertToRomanNumerals functions",
//	My Funcion	
	function() {
		
		it(
			"should convert Int 1 to I", 
			function() {
				//setup
				var input = 1
				var expected = "I";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert Int 2 to II", 
			function() {
				//setup
				var input = 2
				var expected = "II";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 999 to CMXCIX", 
			function() {
				//setup
				var input = 999;
				var expected = "CMXCIX";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 4 to IV", 
			function() {
				//setup
				var input = 4;
				var expected = "IV";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 5 to V", 
			function() {
				//setup
				var input = 5;
				var expected = "V";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 9 to IX", 
			function() {
				//setup
				var input = 9;
				var expected = "IX";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 13 to XIII",
			function() {
				//setup
				var input = 13;
				var expected = "XIII";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 14 to XIV",
			function() {
				//setup
				var input = 14;
				var expected = "XIV";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 19 to XIX",
			function() {
				//setup
				var input = 19;
				var expected = "XIX";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 44 to XLIV",
			function() {
				//setup
				var input = 44;
				var expected = "XLIV";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 49 to XLIX",
			function() {
				//setup
				var input = 49;
				var expected = "XLIX";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert75 to LXXV",
			function() {
				//setup
				var input = 75;
				var expected = "LXXV";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 490 to CDXC", 
			function() {
				//setup
				var input = 490;
				var expected = "CDXC";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 994 to CMXCIV", 
			function() {
				//setup
				var input = 994;
				var expected = "CMXCIV";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert 3003 to MMMIII", 
			function() {
				//setup
				var input = 3003;
				var expected = "MMMIII";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert a number 1-4000 to Roman Numeral String", 
			function() {
				//setup
				var input = 3943;
				var expected = "MMMCMXLIII";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert a number 1-4000 to Roman Numeral String", 
			function() {
				//setup
				var input = 3999;
				var expected = "MMMCMXCIX";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
		
		it(
			"should convert a number 1-4000 to Roman Numeral String", 
			function() {
				//setup
				var input = 4000;
				var expected = "MMMM";
				//execute
				var actual = convertToRomanNumerals.processConversion(input);
				//confirm
				expect(actual).toBe(expected);
			}
		);
	}
);