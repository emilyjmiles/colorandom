class Palette {
  constructor(colors) {
    this.id = Date.now();
    this.colors = colors || this.displayInitialPalette();
  }

  generateRandomPalette() {
    var randomPalette = [];
    for (var i = 0; i < 5; i++) {
      if(this.colors[i].locked === false) {
        randomPalette.push(new Color());
      } else {
        randomPalette.push(this.colors[i]);
      }
    }
    return randomPalette;
  }

  displayInitialPalette() {
    var randomPalette = [];
    for (var i = 0; i < 5; i++) {
      randomPalette.push(new Color());
    }
    return randomPalette;
  }
};
