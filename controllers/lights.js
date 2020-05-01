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

// @desc    Set status of specific light
// @route   PUT /api/v1/lights/:color/:status
// @access  Private
exports.setLight = asyncHandler(async (req, res, next) => {
  const { status, color } = req.params;
  if (!board.lights[color]) {
    return next(
      new ErrorResponse(
        `Could not access light with color ${req.params.color}`,
        404
      )
    );
  }
  if (status.isNaN() || (status !== 0 && status !== 1)) {
    return next(
      new ErrorResponse(`Malformed request. Status must be 0 or 1`, 404)
    );
  }
  board.lights[color].writeSync(status);
  res.status(200).json({ success: true, data: board.lights[color].readSync() });
});
