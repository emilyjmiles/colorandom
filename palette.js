class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [];
  }

  generateColor(hex, indexPosition) {
    var newColor = new Color(hex);
    if (this.colors[indexPosition]) {
        this.colors[indexPosition] = newColor;
    } else {
      this.colors.push(newColor);
      console.log(this.colors, "palette");
    }
  }

  generateRandomPalette() {
    for (var i = 0; i < 5; i++) {
      this.generateColor(undefined, i);
    }
  }
}
