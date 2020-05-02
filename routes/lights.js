const express = require("express");
const { getLights, setLight, blinkLight } = require("../controllers/lights");

const router = express.Router();

// TODO authorize here...

router.route("/").get(getLights).put(setLight).post(blinkLight);

module.exports = router;
