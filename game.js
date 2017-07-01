//Letters available
	var lettersAvailable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	console.log(lettersAvailable);

//Set results
	var wins = 0;
	var losses = 0;
	var guessesMade = 0;
	var guesses = 9;
	var guessesSoFar = [];
	var randomLetter = null;

//Computer must generate a random letter to be guessed
	var actualLetter = lettersAvailable[Math.floor(Math.random() * lettersAvailable.length)];
	console.log(actualLetter);

//User to guess letter, which should be returned in guessesSoFar
	$('#guessesSoFar').keyup(function(event) {
		guessesSoFar[i];
	});

//Each incorrect guess is to trigger guesses to decrease by 1

//If 9 incorrect guesses are made losses is to increase by 1

//If correct letter is selected wins increases by 1