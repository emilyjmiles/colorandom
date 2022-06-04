var newButton = document.querySelector('.new-button');
var saveButton = document.querySelector('.save-button');
var lockButton = document.querySelectorAll('.lock')
var lockButton1 = document.querySelector('.lock1');
var lockButton2 = document.querySelector('.lock2');
var lockButton3 = document.querySelector('.lock3');
var lockButton4 = document.querySelector('.lock4');
var lockButton5 = document.querySelector('.lock5');
var hexCodes = document.querySelectorAll('.hex');
var boxList = document.querySelectorAll('.boxlist');

var palette = new Palette();
var color = new Color();
palette.generateRandomPalette();

//event listener for lock/unlock color

lockButton1.addEventListener("click",palette.lockUnlockColor);
lockButton2.addEventListener("click",palette.lockUnlockColor);
lockButton3.addEventListener("click",palette.lockUnlockColor);
lockButton4.addEventListener("click",palette.lockUnlockColor);
lockButton5.addEventListener("click",palette.lockUnlockColor);
