var newButton = document.querySelector('.new-button');
var saveButton = document.querySelector('.save-button');
var lockButtons = document.querySelectorAll('.lock');
var lockButtonsArray = Array.prototype.slice.call(lockButtons);

var palette = new Palette();
palette.generateRandomPalette();

// newButton.addEventListener("click", test);
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

console.log(palette)
