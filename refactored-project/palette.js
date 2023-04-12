class Palette {
  constructor (colors) {
    this.colors = colors || this.displayInitialPalette();
    this.id = this.colors.reduce((id, color) => {
      return id += color.hexCode;
    }, '');
  }

  generateRandomPalette() {
    const randomPalette = [];
    for (let i = 0; i < 5; i++) {
      if (!this.colors[i].locked) {
        randomPalette.push(new Color());
      } else {
        randomPalette.push(this.colors[i]);
      }
    }
    return randomPalette;
  }

  displayInitialPalette() {
    const randomPalette = [];
    for (let i = 0; i < 5; i++) {
      randomPalette.push(new Color());
    }
    return randomPalette;
  }
};
