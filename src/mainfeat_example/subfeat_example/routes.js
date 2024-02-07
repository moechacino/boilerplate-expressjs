const express = require("express");
const router = express.Router();
const { test } = require("./controller");

router.route("/feat1").get(test);

module.exports = router;
