var newButton = document.querySelector('.new-button');
var saveButton = document.querySelector('.save-button');
var lockButtons = document.querySelectorAll('.lock');
var lockButtonsArray = Array.prototype.slice.call(lockButtons);
var hexCodes = document.querySelectorAll('.hex');
// var hexCode1 = document.querySelector('.hex1');
var hexCodesArray = Array.prototype.slice.call(hexCodes);
var boxList = document.querySelectorAll('.boxlist')
var boxListArray = Array.prototype.slice.call(boxList);
// var boxColor = document.getElementById('#boxlist').style.backgroundColor = color;

var palette = new Palette();
var color = new Color();
palette.generateRandomPalette();

newButton.addEventListener("click", updateColors);
// lockButton1.addEventListener("click",)
function removeClass(element, className) {
  element.classList.remove(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function toggleLock(lockButton) {
  color = new Color();
  if (lockButton.classList.contains('open')) {
    removeClass(lockButton, 'open');
    lockButton.innerText = '🔒';
    color.locked = true;
  } else {
    addClass(lockButton, 'open');
    lockButton.innerText = '🔓';
    color.locked = false;
    // updateColors()
  }
}

for(var i = 0; i < lockButtonsArray.length; i++) {
  const button = lockButtonsArray[i];
  button.addEventListener('click', function() {
    toggleLock(button);
  })
}

function updateColors() {
  color = new Color();
  palette.generateRandomPalette();
    for (var i = 0; i < hexCodesArray.length; i++) {
      // console.log(hexCodes[i].innerText, "hexcode");
    if (color.locked === false) {
      // console.log(color.locked, "function");
      // console.log(palette.colors[0].hexCode);
      hexCodes[i].innerText = palette.colors[i].hexCode;
    }
  }
}

updateColors()
console.log(palette)
