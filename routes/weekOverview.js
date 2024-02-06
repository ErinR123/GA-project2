const express = require("express");
const router = express.Router();
const mindfullnessModel = require("../models/mindfullness");
const User = require("../models/user");
const movementModel = require("../models/movement");

router.get("/", async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate("mindfullness")
    .populate("movement")
    .populate("sleep")
    .populate("nourishment");

  res.render("weekOverview", { user });
});

module.exports = router;
