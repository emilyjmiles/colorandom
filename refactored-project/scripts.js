const newPaletteButton = document.querySelector('.new-button');
const savePaletteButton = document.querySelector('.save-button');

const allColorBoxes = document.querySelector('.all-color-boxes');
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
  displayColors();
};

function saveMiniPalette() {
  saveCurrentPalette();
  displayMiniPalette();
  createNewPalette();
};

function displayColors() {
  allColorBoxes.innerHTML = '';
  currentPalette.colors.map(color => {
    if (!color.locked) {
      lockImage = './assets/lock-icon-open.webp';
      lockClass = 'unlocked';
    } else {
      lockImage = './assets/lock-icon-closed.webp';
      lockClass = 'locked';
    }

    allColorBoxes.innerHTML +=
      `<section class="individual-box" id=${color.hexCode}>
        <div class="color-box" style="background-color:${color.hexCode}"></div>
        <div class="color-and-lock">
          <h2 class="hex">${color.hexCode}</h2>
          <img
            type="button"
            class="lock-button ${lockClass}" 
            src="${lockImage}" 
            width="90px" 
            height="100px" 
            onclick="lockColor()"
          />
        </div>
      </section>`;
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
    displayColors();
  });
};

function createNewPalette() {
  currentPalette.colors = currentPalette.generateRandomPalette();
  displayColors();
};

function saveCurrentPalette() {
  const newPalette = new Palette(currentPalette.colors);
  const savedIds = savedPalettes.map(palette => palette.id);

  if (!savedIds.includes(newPalette.id)) {
    savedPalettes.push(newPalette);
  }
}

function displayMiniPalette() {
  savedColors.innerHTML = '';
  savedPalettes.map(palette => {
    const miniColorsHTML = palette.colors.map(color => (
      `<div class="mini-box" style="background-color: ${color.hexCode}"></div>`
    )).join('');

    savedColors.innerHTML +=
      `<section class="mini-palette">
      ${miniColorsHTML}
      <div class="trash-can" data-id="${palette.id}">🗑</div>
    </section>`;
  });
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