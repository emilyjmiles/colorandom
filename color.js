class Color {
    constructor(hexCode = this.generateHexCode()) {
      this.hexCode = hexCode
      this.locked = false;
    }

    randomNumber(array) {
      return Math.floor(Math.random() * array.length);
    }

    generateHexCode() {
      var hexChoices = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
      var hexId = '#';
      for(var i = 0; i < 6; i++) {
        hexId += hexChoices[this.randomNumber(hexChoices)];
    }
      return hexId;
  }
};
