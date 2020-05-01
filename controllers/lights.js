const board = require("../utils/board");

const Gpio = require("onoff");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc    Get status of all lights
// @route   GET /api/v1/lights
// @access  Public
exports.getLights = asyncHandler(async (req, res, next) => {
  data = {
    green: board.lights.green.readSync(),
    red: board.lights.red.readSync(),
    yellow: board.lights.yellow.readSync(),
    blue: board.lights.blue.readSync(),
  };
  res.status(200).json({ success: true, data: data });
});
