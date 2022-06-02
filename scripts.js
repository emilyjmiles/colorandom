// Iteration 1 - OOP
// Write two classes: Color and Palette
// Color:
// A color should have a random hex code
// hint: hex codes are 6 characters long, and each character is some value of 0-9 or A-F (ABCDEF0123456789)
// Though there are many examples of this logic coded out, this type of crunchy problem solving is well within your skill set!
// Don’t look up how to accomplish this; challenge yourselves to use pseudocode to problem-solve through it!
// It should have a property of locked, whose value is a boolean. Colors begin unlocked.

var newButton = document.querySelector(".new-button");


var newHexCodes = new Color(hexcode)

newButton.addEventListener("click", randomizeHexCodes);


function randomizeHexCodes(array) {
  var hexChoices = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  var hexId = '#';
  for(var i = 0; i < 6; i++){
    var randomCode = Math.floor(Math.random() * hexChoices.length)
    hexId += hexChoices[i];
  }
}
