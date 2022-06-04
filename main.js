var newButton = document.querySelector('.new-button');
var saveButton = document.querySelector('.save-button');
var lockButtons = document.querySelectorAll('.lock');
var lockButtonsArray = Array.prototype.slice.call(lockButtons);
var hexCodes = document.querySelectorAll('.hex');
var hexCodesArray = Array.prototype.slice.call(hexCodes);
var boxList = document.querySelectorAll('.boxlist')
var boxListArray = Array.prototype.slice.call(boxList);
// var boxColor = document.getElementById('#boxList');

var palette = new Palette();
var color = new Color();
// palette.generateRandomPalette();

newButton.addEventListener("click", updateColors);
// lockButton1.addEventListener("click",)
function removeClass(element, className) {
  element.classList.remove(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function toggleLock(lockButton) {
  if (lockButton.classList.contains('open')) {
    removeClass(lockButton, 'open');
    lockButton.innerText = '🔒';
  } else {
    addClass(lockButton, 'open');
    lockButton.innerText = '🔓';
  }
}

for(var i = 0; i < lockButtonsArray.length; i++) {
  const button = lockButtonsArray[i];
  button.addEventListener('click', function() {
    toggleLock(button);
  })
}

function updateColors() {
  palette.generateRandomPalette();
  for (var i = 0; i < hexCodesArray.length; i++) {
    if (color.locked === false) {
      // boxColor = color
    }
  }
};

function updateColors() {
  palette.generateRandomPalette();
  for (var i = 0; i < hexCodesArray.length; i++) {
    if (color.locked === false) {
        hexCode.innerText = palette.colors[0].hexCode;
    }
  }
}

console.log(palette)
