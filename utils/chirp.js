const board = require("./board");

module.exports = () => {
  board.speaker.writeSync(1);
  setTimeout(() => {
    board.speaker.writeSync(0);
  }, 5);
  setTimeout(() => {
    board.speaker.writeSync(1);
  }, 30);
  setTimeout(() => {
    board.speaker.writeSync(0);
  }, 5);
};
