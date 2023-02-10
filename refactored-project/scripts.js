const newPaletteButton = document.querySelector('.new-button');
const savePaletteButton = document.querySelector('.save-button');
// const deletePaletteButton = document.querySelector('.delete-button');

const allColorBoxes = document.querySelector('.all-color-boxes');
// const individualBox = document.querySelector('.individual-box');
const colorBox = document.querySelector('.color-box');
const savedColors = document.querySelector('.saved-colors');
const miniPalette = document.querySelector('.mini-palette');

const savedPalettes = [];
let currentPalette;
let lockImage;
let lockClass;

window.addEventListener('load', displayPageLoad);
newPaletteButton.addEventListener('click', createNewPalette);
savePaletteButton.addEventListener('click', saveMiniPalette);
savedColors.addEventListener('click', removeSavedPalette);

function displayPageLoad() {
  currentPalette = new Palette();
  generateColors();
};

function saveMiniPalette() {
  saveCurrentPalette();
  displayMiniPalette();
  createNewPalette();
};

function generateColors() {
  allColorBoxes.innerHTML = '';
  currentPalette.colors.map(color => {
    if (!color.locked) {
      lockImage = './assets/lock-icon-open.webp';
      lockClass = 'unlocked';
    } else {
      lockImage = './assets/lock-icon-closed.webp';
      lockClass = 'locked';
    }
    allColorBoxes.innerHTML += `<section class="individual-box" id=${color.hexCode}>
      <div class="color-box" style="background-color:${color.hexCode}"></div>
      <div class="color-and-lock">
        <h2 class="hex">${color.hexCode}</h2>
        <img type="button" class="lock-button ${lockClass}" src="${lockImage}" width="90px" height="100px" onclick="lockColor()">
        </div>
        </section>`;

    return allColorBoxes;
  });
};

function lockColor() {
  const colorboxarea = event.target.closest('section');

  currentPalette.colors.forEach(color => {
    if (colorboxarea.id === color.hexCode) {
      if (color.locked === false) {
        color.locked = true;
      } else {
        color.locked = false;
      }
    }
    generateColors();
  });
};

function createNewPalette() {
  currentPalette.colors = currentPalette.generateRandomPalette();
  generateColors();
};

function saveCurrentPalette() {
  const savedPalette = new Palette(currentPalette.colors);
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
    </section>`;
  }
};


function removeSavedPalette() {
  if (event.target.classList.contains('trash-can')) {
    event.target.closest('section').remove();
  }
  for (let i = 0; i < savedPalettes.length; i++) {
    if (savedPalettes[i].id === parseInt(event.target.getAttribute('data-id'))) {
      savedPalettes.splice(i, 1);
      displayMiniPalette();
      return savedPalettes;
    }
  }
};