var newButton = document.querySelector('.new-button');
var saveButton = document.querySelector('.save-button');
var lockButtons = document.querySelectorAll('.lock');
// var lockButtonsArray = Array.prototype.slice.call(lockButtons);
var hexCodes = document.querySelectorAll('.hex');

// var hexCode1 = document.querySelector('.hex1');
// var hexCodesArray = Array.prototype.slice.call(hexCodes);
var boxList = document.querySelectorAll('.boxlist')
// var boxListArray = Array.prototype.slice.call(boxList);
// var boxColor = document.getElementById('#boxlist').style.backgroundColor = color;

// var hexCodesArray = Array.prototype.slice.call(hexCodes);
var boxList = document.querySelectorAll('.boxlist')
// var boxListArray = Array.prototype.slice.call(boxList);
// var boxColor = document.getElementById('#boxList').style.backgroundColor = color;


var palette = new Palette();
var color = new Color();
palette.generateRandomPalette();

newButton.addEventListener("click", updateColors);
// lockButton1.addEventListener("click",)
function removeClass(element, className) {
  element.classList.remove(className);
};

function addClass(element, className) {
  element.classList.add(className);
};

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
  }
};

function eventListenerLock() {
for(var i = 0; i < lockButtonsArray.length; i++) {
  const button = lockButtons[i];
  button.addEventListener('click', function(e) {
    toggleLock(e.target);
  })
 }
}

function updateColors() {
  palette.generateRandomPalette();
    for (var i = 0; i < hexCodes.length; i++) {
        if (palette.colors[i].locked === false) {
        hexCodes[i].innerText = palette.colors[i].hexCode;
    }
  }
  // eventListenerLock();
}

updateColors()
console.log(palette)
=======
function eventListenerLock() {}
  for(var i = 0; i < lockButtons.length; i++) {
    const button = lockButtons[i];
    button.addEventListener('click', function(e) {
      toggleLock(e.target);
    })
  }
};

function updateColors() {
  // color = new Color();
  palette.generateRandomPalette();
    for (var i = 0; i < hexCodes.length; i++) {
      if (palette.colors[i]color.locked === false) {
        hexCodes[i].innerText = palette.colors[i].hexCode;
    }
  }
    // eventListenerLock();
};

updateColors();
console.log(palette);
