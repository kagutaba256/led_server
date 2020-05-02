const chirp = require("../utils/chirp");

const asyncHandler = require("../middleware/async");

// @desc    Play chirp on speaker.
// @route   POST /api/v1/speaker/
// @access  Private
exports.playSound = asyncHandler(async (req, res, next) => {
  chirp();
  res.status(200).json({ success: true });
});
