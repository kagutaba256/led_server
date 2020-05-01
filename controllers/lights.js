const board = require("../utils/board");

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

// @desc    Set status of specific light or lights
// @route   PUT /api/v1/lights/
// @access  Private
exports.setLight = asyncHandler(async (req, res, next) => {
  data = {};
  req.body.forEach((light) => {
    const { color, status } = light;
    if (!board.lights[color]) {
      return next(
        new ErrorResponse(
          `Could not access light with color ${req.params.color}`,
          404
        )
      );
    }
    // TODO real error handling here..
    // if (status.isNaN() || (status !== 0 && status !== 1)) {
    //   return next(
    //     new ErrorResponse(`Malformed request. Status must be 0 or 1`, 404)
    //   );
    // }
    board.lights[color].writeSync(status);
    data[color] = board.lights[color].readSync();
  });
  res.status(200).json({ success: true, data: data });
});
