const Gpio = require("onoff").Gpio;
const colors = require("colors");

const boardContents = require("../config/board.json");

board = {
  lights: {
    green: new Gpio(boardContents.lights.green, "out"),
    red: new Gpio(boardContents.lights.red, "out"),
    yellow: new Gpio(boardContents.lights.yellow, "out"),
    blue: new Gpio(boardContents.lights.blue, "out"),
  },
  // TODO add button and speaker support
  //button: new Gpio(boardContents.button, "in"),
  //speaker: new Gpio(boardContents.speaker, "out"),
};

module.exports = board;
