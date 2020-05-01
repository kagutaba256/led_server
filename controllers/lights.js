const board = require("../utils/board");

const Gpio = require("onoff");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc    Get status of all lights
// @route   GET /api/v1/lights
// @access  Public
exports.getLights = asyncHandler(async (req, res, next) => {
  data = {
    green: board.lights.green.getStatus(),
    red: board.lights.red.getStatus(),
    yellow: board.lights.yellow.getStatus(),
    blue: board.lights.blue.getStatus(),
  };
  res.status(200).json({ success: true, data: data });
});
