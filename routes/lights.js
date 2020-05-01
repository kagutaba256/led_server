const express = require("express");
const { getLights, setLight } = require("../controllers/lights");

const router = express.Router();

// TODO authorize here...

router.route("/").get(getLights);
router.route("/:color/:status").put(setLight);

module.exports = router;
