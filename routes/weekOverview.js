const express = require("express");
const router = express.Router();
const mindfulness = require("../models/mindfulness");
const User = require("../models/user");
const Movement = require("../models/movement");
const Sleep = require("../models/sleep");

router.get("/", async (req, res) => {
  const mindfulnessOptions = await mindfulness.schema.path("mindfulnessOption")
    .enumValues;
  const movementOptions = await Movement.schema.path("movementOption")
    .enumValues;
  const sleepOptions = await Sleep.schema.path("sleepOption").enumValues;
  const weekOptions = await mindfulness.schema.path("dayOfWeekOption")
    .enumValues;
  const user = await User.findById(req.user._id)
    .populate("mindfulness")
    .populate("movement")
    .populate("sleep");

  res.render("weekOverview", {
    user,
    mindfulnessOptions,
    movementOptions,
    sleepOptions,
    weekOptions,
  });
});

module.exports = router;
