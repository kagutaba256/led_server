const express = require("express");
const { getLights } = require("../controllers/lights");

const router = express.Router();

// TODO authorize here...

router.route("/").get(getLights);

module.exports = router;
