

var newButton = document.querySelector(".new-button");
var hexcode = document.querySelector(".hex1")


var newColor;

newButton.addEventListener("click", randomizeHexCodes);


function randomizeHexCodes(array) {
  var hexChoices = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  var hexId = '#';
  for(var i = 0; i < 6; i++){
    newHexCodes = Math.floor(Math.random() * hexChoices.length)
    hexId += hexChoices[i];
  }
}

function generateColor() {
  var randomColor = new Color(randomizeHexCodes(hexcode));
  hexcode.innerText = newColor;

}
