const newPaletteButton = document.querySelector('.new-button');
const savePaletteButton = document.querySelector('.save-button');
const individualBox = document.querySelector('.individual-box');
const boxList = document.querySelector('.box');
const allColorBoxes = document.querySelector('.all-color-boxes');
const savedColors = document.querySelector('.saved-colors');

const savedPalettes = [];
let currentPalette;

window.addEventListener('load', displayPageLoad);
newPaletteButton.addEventListener('click', createNewPalette);
savePaletteButton.addEventListener('click', saveMiniPalette);
allColorBoxes.addEventListener('click', lockColor);
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
  let lockedEmoji = '';
  let lockedClass = '';

  currentPalette.colors.map(color => {
    if (color.locked) {
      lockedEmoji = '🔒';
      lockedClass = 'close';
    } else {
      lockedEmoji = '🔓';
      lockedClass = 'open';
    }
    allColorBoxes.innerHTML += `<section class="individual-box">
      <section class="box" style="background-color:${color.hexCode}" id="boxList${color}">
      </section>
      <div class="color-and-lock">
        <h2 class="hex">${color.hexCode}</h2>
        <h3 class="lock ${lockedClass}" type="lock">${lockedEmoji}</h3>
      </div>
    </section>`;

    return allColorBoxes;
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
  savedPalettes.forEach(palette => {
    palette.colors.forEach(color => {
      console.log(color);
      savedColors.innerHTML +=
        `<section class="mini-palette">
          <div class="mini-box" style="background-color: ${savedPalettes[i].colors[0].hexCode}"></div>
          <div class="mini-box" style="background-color: ${savedPalettes[i].colors[1].hexCode}"></div>
          <div class="mini-box" style="background-color: ${savedPalettes[i].colors[2].hexCode}"></div>
          <div class="mini-box" style="background-color: ${savedPalettes[i].colors[3].hexCode}"></div>
          <div class="mini-box" style="background-color: ${savedPalettes[i].colors[4].hexCode}"></div>
          <div class="trash-can" data-id="${savedPalettes[i].id}">🗑</div>
        </section>`;
    });
  });
};

function lockColor(event) {
  const colorboxarea = event.target.id.slice(0, 7);
  if (colorboxarea === 'boxList') {
    const index = event.target.id.slice(7, 8);
    if (currentPalette.colors[index].locked === false) {
      currentPalette.colors[index].locked = true;
    } else {
      currentPalette.colors[index].locked = false;
    }
    generateColors();
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
