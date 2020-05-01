const Gpio = require("onoff").Gpio;
const fs = require("fs");
const colors = require("colors");

console.log("Reading data from board.json...".blue.bold);
let boardContents;
try {
  const content = fs.readFileSync("../config/board.json");
  boardContents = JSON.parse(content);
} catch (error) {
  console.error("ERROR: Problem reading from board.json. Exiting".red.bold);
  process.exit(1);
}

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
