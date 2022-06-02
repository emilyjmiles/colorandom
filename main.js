class Color {
    constructor(hexcode, boolean) {
      this.hexcode = hexcode;
      this.locked = boolean;

    }
    getRandomHex(array) {
      var hexChoices = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
      var hexId = '#';
      for(var i = 0; i < 6; i++){
        var randomCode = Math.floor(Math.random() * hexChoices.length)
        hexId += hexChoices[i];
      }
    }
  }
