class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [];
  }
  addColorToPalette() {
    for (var i = 0; i < 6; i++) {
      var newColor = new Color()
      this.colors.push(newColor);



    }
  }
}
