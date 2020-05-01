const Gpio = require("onoff").Gpio;

const boardContents = JSON.parse("../config/board.json");

board = {
  lights: {
    green: new Gpio(boardContents.lights.green, "out"),
    red: new Gpio(boardContents.lights.red, "out"),
    yellow: new Gpio(boardContents.lights.yellow, "out"),
    blue: new Gpio(boardContents.lights.blue, "out"),
  },
  button: new Gpio(boardContents.button, "in"),
  speaker: new Gpio(boardContents.speaker, "in"),
};

module.exports = board;
