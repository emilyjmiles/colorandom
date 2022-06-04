var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var lockButton= document.querySelectorAll('lock');
var lockButton1 = document.querySelector('.lock1');
var lockButton2 = document.querySelector('.lock2');
var lockButton3 = document.querySelector('.lock3');
var lockButton4 = document.querySelector('.lock4');
var lockButton5 = document.querySelector('.lock5');
var hexCodes = document.querySelectorAll('.hex');
var boxList = document.querySelectorAll('#boxlist');
var allColorBoxes = document.querySelector(".all-color-boxes");

var currentPalette = "";

//event listener for lock/unlock color

// lockButton1.addEventListener("click", palette.lockUnlockColor);
// lockButton2.addEventListener("click", palette.lockUnlockColor);
// lockButton3.addEventListener("click", palette.lockUnlockColor);
// lockButton4.addEventListener("click", palette.lockUnlockColor);
// lockButton5.addEventListener("click", palette.lockUnlockColor);
window.addEventListener("load", onPageLoad)
newPaletteButton.addEventListener("click", createNewPalette)

function onPageLoad() {
  currentPalette = new Palette;
  updateColors();
}

function updateColors() {
  var allColors = "";
  for (var i = 0; i < currentPalette.colors.length; i++) {
    allColors +=
    `<section class="individual-box">
      <section class="box1" style="background-color:${currentPalette.colors[i].hexCode}" id="boxlist">
      </section>
      <div class="color-and-lock">
        <h2 class="hex">${currentPalette.colors[i].hexCode}</h2>
        <h3 class="lock1 open" type="lock">🔓</h3>
      </div>
    </section>`
  }
  allColorBoxes.innerHTML = allColors;
}

function createNewPalette() {
  currentPalette.colors = currentPalette.generateRandomPalette();
  console.log(currentPalette);
  updateColors();

}
