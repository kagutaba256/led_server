const board = require("../utils/board");

const Gpio = require("onoff");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const chirp = () => {
  speaker = new Gpio(board.speaker, "out");
  speaker.writeSync(1);
  setTimeout(() => {
    speaker.writeSync(0);
  }, 5);
  setTimeout(() => {
    speaker.writeSync(1);
  }, 30);
  setTimeout(() => {
    speaker.writeSync(0);
  }, 5);
};

// @desc    Play chirp on speaker.
// @route   POST /api/v1/speaker/
// @access  Private
exports.playSound = asyncHandler(async (req, res, next) => {
  chirp();
  res.status(200).json({ success: true, data: data });
});
