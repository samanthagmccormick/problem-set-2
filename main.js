$(document).on('ready', function() {

// Function: Reverse a string

var firstReverse = function(str) {


	for (var i = str.length; i > -1; i--) {
		console.log(str[i]);
	}
};

firstReverse("hello");



// Function: Swap the case of each character

var swapCase = function(str) {

	var newArray = str.split('');

	for (var i = 0; i < str.length; i++) {
		if (newArray[i] === newArray[i].toUpperCase()) {
			console.log('Already upper');
		}
		else {
			console.log("Already lower");		}
	};

	return newArray;

};

swapCase('Hello');


// Bonus: Letter count

var letterCount = function() {
	
}



  
});