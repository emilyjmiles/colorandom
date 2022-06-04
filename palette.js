class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = this.generateRandomPalette();
  }

  generateRandomPalette() {
      var randomPalette = [];
      for (var i = 0; i < 5; i++) {
        randomPalette.push(new Color());
    }
    return randomPalette;
  }

  lockUnlockColor() {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].locked === false) {
        this.colors[i].locked = true;
        lockButton.innerText = '🔒';
      } else {
        this.colors[i].locked = false;
        lockButton.innerText = '🔓';
      }
    }
  }
}
