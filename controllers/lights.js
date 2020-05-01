const board = require("../utils/board");

const Gpio = require("onoff");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc    Get status of all lights
// @route   GET /api/v1/lights
// @access  Public
exports.getLights = asyncHandler(async (req, res, next) => {
  data = board.lights.map(Gpio.readSync);
  res.status(200).json({ success: true, data: data });
});
