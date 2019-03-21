// The first thing is to set up initail vars, I like to try and set up all of my vars upfront. So
//I know I need wins,losses, and how many guesses or attempts at the right answer. I also need a var
//for the random number and one for all of the letters in the alphabit or how ever many letters I want to 
//use for the game. 
// So, Wins, Loses, and Attempts...
var wins = 0;
var losses = 0;
var attempts = 15;
// Letters Guessed var  and array
var guesses = [];
// Random letters var
var randomLetters = randomLetters;

var fullAlphabet = "abcdefghijklmnopqrstuvwxyz"

// The first step is to create the Random number Generator using math.floor/math.random. I have all 26
//letters in the alphabet so it will multiply it by 26 by using the var fullAlphabet. Ultimitely we want to have 
//a function that takes the random whole number and plugs the corrisponding letter into the var randomletter.

randomLetters = fullAlphabet[Math.floor(Math.random() * fullAlphabet.length)];

function playerguess() {
    randomLetters = fullAlphabet[Math.floor(Math.random() * fullAlphabet.length)];
}
// I need to be able to see the keyboard selection that the player selects. So this is what the javascript
//tutorial shows me  document.onkeyup = myKeyUpHandler;
// function myKeyUpHandler() {
// alert("A key up event took place within the document!");} 
//I am not going to use the var myKeyHandler so I will replace that with playersturn and change the alert to the 
// event.key because I want the player to use the KEY board....
    
document.onkeyup = playersturn;

function playersturn() {
    var playersturn = event.key;
    // Next I need two "if" statements to represent if the player guesses correctly (===) or guesses wrong(!==), dont forget to
    // show the attempts decrease and to keep track of the letters guessed.
    if (playersturn === randomLetters) {
        wins++;
        attempts = 15;
        guesses = [];
    }
   
    playerguess();
    if (playersturn !== randomLetters) {
        attempts--;
    }
   //I also need an 'if' statement for when the player has attempted the 15 opportunities that I have alloted.

    if (attempts === 0) {
        losses++;
        guesses = [];
        attempts = 15;
    }

   // I dont want the player to be able to guess the same letter multiple times. According to W3schools it tells me that "indexOf" will search the array which I have 
   //setup as guesses and match them up with playersturn so that it will not count against them and they cannot select a letter 2X. Then I need to "push" the letters that 
   //the player does guess out to the page for display. So ultimitely it will be another "if"/"else" statement.
    if (guesses.indexOf(playersturn) >= 0) {

    }
    
    else {
        guesses.push(playersturn);


        // I need to make sure to do the document.getElementID that way the results get displayed with the ID's I have selected in my HTML...innerHTML will display those. 
        document.getElementById('players-turn').innerHTML = guesses;
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('attempts').innerHTML = attempts;
    }


}
