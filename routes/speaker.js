const express = require("express");
const { playSound } = require("../controllers/speaker");

const router = express.Router();

// TODO authorize here...

router.route("/").post(playSound);

module.exports = router;
