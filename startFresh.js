var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var lockButton = document.querySelectorAll('.lock');
var lockButton1 = document.querySelector('.lock1');
var lockButton2 = document.querySelector('.lock2');
var lockButton3 = document.querySelector('.lock3');
var lockButton4 = document.querySelector('.lock4');
var lockButton5 = document.querySelector('.lock5');
var hexCodes = document.querySelectorAll('.hex');
var boxList = document.querySelectorAll('.boxlist');
var allColorBoxes = document.querySelector('.all-color-boxes');
var savedColors = document.querySelector('.saved-colors');


var currentPalette = "";
var savedPalettes = [];


window.addEventListener("load", onPageLoad)
newPaletteButton.addEventListener("click", createNewPalette)
savePaletteButton.addEventListener("click", saveMiniPalette)
allColorBoxes.addEventListener("click", lockColor)


function onPageLoad() {
    currentPalette = new Palette();
    updateColors();
}

function saveMiniPalette() {
  saveCurrentPalette();
  displayMiniPalette();
  createNewPalette();
}

function updateColors() {
  var lockedEmoji = "";
  var lockedClass = "";
  var allColors = "";
  for (var i = 0; i < currentPalette.colors.length; i++) {
    if(currentPalette.colors[i].locked === true) {
      lockedEmoji = '🔒';
      lockedClass = 'close';
    } else {
      lockedEmoji = '🔓';
      lockedClass = 'open';
    }
    allColors +=
    `<section class="individual-box">
      <section class="box" style="background-color:${currentPalette.colors[i].hexCode}" id="boxlist${i}">
      </section>
      <div class="color-and-lock">
        <h2 class="hex">${currentPalette.colors[i].hexCode}</h2>
        <h3 class="lock ${lockedClass}" type="lock">${lockedEmoji}</h3>
      </div>
    </section>`
  }
  allColorBoxes.innerHTML = allColors;
}

function createNewPalette() {
  currentPalette.colors = currentPalette.generateRandomPalette();
  updateColors();
}

function saveCurrentPalette() {
  var savedPalette = new Palette(currentPalette.colors);
  savedPalettes.push(savedPalette);
}

function displayMiniPalette() {
  savedColors.innerHTML = "";
  for (var i = 0; i < savedPalettes.length; i++) {
    savedColors.innerHTML +=
    `<section class="mini-palette">
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[0].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[1].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[2].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[3].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[4].hexCode}"></div>
      <div class="trash-can">🗑</div>
    </section>`
  }
}

  function lockColor(event) {
    var colorboxarea = event.target.id.slice(0, 7);
    if (colorboxarea === "boxlist") {
      var index = event.target.id.slice(7, 8);
      if(currentPalette.colors[index].locked === false) {
         currentPalette.colors[index].locked = true;
        } else {
          currentPalette.colors[index].locked = false;
        }
      updateColors();
  }
}
