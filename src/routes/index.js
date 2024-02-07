const express = require("express");
const router = express.Router();

//example
const subfeat_example = require("../mainfeat_example/subfeat_example");

router.route("/").get((req, res) => {
  res.send("HOME");
});

router.use("/subfeat", subfeat_example);
module.exports = router;
