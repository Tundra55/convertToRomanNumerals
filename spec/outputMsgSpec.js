var outputMsg = require('../src/outputMsg.js');

// describe(MANY COMPLEX PARAMETERS);
// describe("MY DESCRIPTION", MY_FUNCTION(MANY COMPLEX PARAMETERS);
describe(
//	My Description	
	"test outputMsg functions",
//	My Funcion	
	function() {
		
		it(
			"should output negative message", 
			function() {
				//setup
				var input = 4001;
				//execute
				var actual = outputMsg.processOutputMsg(input);
				//confirm
				expect(actual).toBe("Please enter a number 1 - 4000");
			}
		);
		it(
			"should output positive message", 
			function() {
				//setup
				var input = 3000;
				//execute
				var actual = outputMsg.processOutputMsg(input);
				//confirm
				expect(actual).toBe(input + " converted to Roman Numerals:");
			}
		);
	}
);