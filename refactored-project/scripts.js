var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var boxList = document.querySelector('#boxList');
var allColorBoxes = document.querySelector('.all-color-boxes');
var savedColors = document.querySelector('.saved-colors');

var currentPalette = '';
var savedPalettes = [];

window.addEventListener('load', onPageLoad);
newPaletteButton.addEventListener('click', createNewPalette);
savePaletteButton.addEventListener('click', saveMiniPalette);
allColorBoxes.addEventListener('click', lockColor);
savedColors.addEventListener('click', removeSavedPalette);

function onPageLoad() {
    currentPalette = new Palette();
    updateColors();
};

function saveMiniPalette() {
  saveCurrentPalette();
  displayMiniPalette();
  createNewPalette();
};

function updateColors() {
  var lockedEmoji = '';
  var lockedClass = '';
  var allColors = '';
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
      <section class="box" style="background-color:${currentPalette.colors[i].hexCode}" id="boxList${i}">
      </section>
      <div class="color-and-lock">
        <h2 class="hex">${currentPalette.colors[i].hexCode}</h2>
        <h3 class="lock ${lockedClass}" type="lock">${lockedEmoji}</h3>
      </div>
    </section>`
  }
  allColorBoxes.innerHTML = allColors;
};

function createNewPalette() {
  currentPalette.colors = currentPalette.generateRandomPalette();
  updateColors();
};

function saveCurrentPalette() {
  var savedPalette = new Palette(currentPalette.colors);
  savedPalettes.push(savedPalette);
};

function displayMiniPalette() {
  savedColors.innerHTML = '';
  for (var i = 0; i < savedPalettes.length; i++) {
    savedColors.innerHTML +=
    `<section class="mini-palette">
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[0].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[1].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[2].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[3].hexCode}"></div>
      <div class="mini-box" style="background-color: ${savedPalettes[i].colors[4].hexCode}"></div>
      <div class="trash-can" data-id="${savedPalettes[i].id}">🗑</div>
    </section>`
  }
};

function lockColor(event) {
  var colorboxarea = event.target.id.slice(0, 7);
  if (colorboxarea === 'boxList') {
    var index = event.target.id.slice(7, 8);
    if(currentPalette.colors[index].locked === false) {
       currentPalette.colors[index].locked = true;
      } else {
        currentPalette.colors[index].locked = false;
      }
    updateColors();
  }
};

function removeSavedPalette() {
  if (event.target.classList.contains('trash-can')) {
    event.target.closest('section').remove();
  }
  for (var i = 0; i < savedPalettes.length; i++) {
    if (savedPalettes[i].id === parseInt(event.target.getAttribute('data-id'))) {
      savedPalettes.splice(i, 1);
      displayMiniPalette();
      return savedPalettes;
    }
  }
};
